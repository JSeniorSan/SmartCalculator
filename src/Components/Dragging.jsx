import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
// компонента-обертка для элементов
function Dragging(props) {
  function drag(e) {
    let container = {};
    let element = e.target.closest(".draggable");
    console.log(container);
    element.onmousedown = function (e) {
      if (!element) return;

      shift(e);
      document.body.append(element);

      element.style.position = "absolute";
      element.style.zIndex = 9999;

      element.style.left = e.pageX - container.shiftX + "px";
      element.style.top = e.pageY - container.shiftY + "px";

      moveAt(e.pageX, e.pageY);
      let currentTarget = null;
      function onMouseMove(e) {
        if (!element) return;
        moveAt(e.pageX, e.pageY);

        element.hidden = true;
        let elementBelow = document.elementFromPoint(e.clientX, e.clientY);
        element.hidden = false;

        if (!elementBelow) return;

        let droppableBelow = elementBelow.closest(".droppable");

        if (currentTarget != droppableBelow) {
          if (currentTarget) {
            leaveDroppable(currentTarget);
            console.log("Вышел");
          }

          currentTarget = droppableBelow;
          if (currentTarget) {
            enterDroppable(currentTarget);
          }
        } else {
          console.log("yes");
        }
        function leaveDroppable(droppable) {
          droppable.style.boxShadow = "0 0 0 0";
        }
        function enterDroppable(droppable) {
          droppable.style.boxShadow = "0 0 10px 1px red";
          console.log("Вошел");
        }
      }
      document.addEventListener("mousemove", onMouseMove);

      element.onmouseup = function (e) {
        document.removeEventListener("mousemove", onMouseMove);
        element.onmouseup = null;
      };
    };
    // отключаем встроенный в браузер dnd
    element.ondragstart = function () {
      return false;
    };

    // document.addEventListener("mousedown", onMouseDown);

    function moveAt(pageX, pageY) {
      element.style.left = pageX - container.shiftX + "px";
      element.style.top = pageY - container.shiftY + "px";
    }
    function shift(e) {
      let shiftX = e.clientX - element.getBoundingClientRect().left;
      let shiftY = e.clientY - element.getBoundingClientRect().top;
      container.shiftX = shiftX;
      container.shiftY = shiftY;
    }
  }

  //   // обработка нажатия на конкретный элемент
  //   let draggable = element.target;
  //   let data = {};
  //   console.log(element);
  //   // ------------------------------------------------------------------------------------------------------

  //   document.onmousedown = function (e) {
  //     // подготовка элемента к переносу
  //     draggable.style.position = "absolute";
  //     draggable.style.zIndex = "1000";

  //     if (!draggable) return;

  //     data.downX = e.pageX - draggable.offsetWidth / 2;
  //     data.downY = e.pageY - draggable.offsetHeight / 2;

  //     console.log(data);
  //     //прокидываем элемент в body, чтобы он был в самом теле документа
  //     document.body.append(draggable);

  //     let currentDroppable = null;
  //     // ________________________
  //     function onMouseMove(event) {
  //       moveAt(event.pageX, event.pageY);
  //       draggable.hidden = true;
  //       let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
  //       draggable.hidden = false;
  //       if (!elemBelow) return;
  //       let droppableBelow = elemBelow.closest(".droppable");

  //       if (droppableBelow !== currentDroppable) {
  //         if (currentDroppable) {
  //           leaveDroppable(currentDroppable);
  //           return;
  //         }
  //         currentDroppable = droppableBelow;
  //         if (currentDroppable) {
  //           enterDroppable(currentDroppable);
  //         }
  //       }
  //     }

  //     function leaveDroppable(elem) {
  //       elem.style.background = "";
  //       draggable.style.cursor = "default";
  //     }

  //     // логика, когда переводимый элемент открепляется на нужном участке отжимом мыши
  //     function enterDroppable(elem) {
  //       // эвент лисенер на отжим кнопки
  //       draggable.onmouseup = function () {
  //         draggable.style.display = "none";
  //         // вичисляется в результат значение предыдущего результата, нужного знака и переносимого элемента
  //         props.setResult(
  //           eval(`${props.result} ${elem.innerHTML} ${draggable.innerHTML}`)
  //         );
  //         document.removeEventListener("mousemove", onMouseMove);
  //         draggable.onmouseup = null;
  //         draggable = null;
  //         return;
  //       };
  //       draggable.style.cursor = "copy";
  //     }

  //     //   обработчик события при движении мыши (разобрать)
  //     document.addEventListener("mousemove", onMouseMove);
  //     // -------------------------------------------------------------------------------------
  //     // создаем функцию отслеживания положения мыши по координатам с возможностью перемещения самого элемента
  //     // draggable.offsetWidth/2 нужен для центрирования
  //     function moveAt(pageX, pageY) {
  //       draggable.style.left = pageX - draggable.offsetWidth / 2 + "px";
  //       draggable.style.top = pageY - draggable.offsetHeight / 2 + "px";
  //     }
  //     // вызываем функцию
  //     moveAt(e.pageX, e.pageY);
  //     // -------------------------------------------------------------------------------------

  //     //   описание отпускания мыши не в области droppable
  //     document.onmouseup = function (e) {
  //       // draggable.style.display = "none";

  //       document.removeEventListener("mousemove", onMouseMove);
  //       // props.changeHistoryDnD(draggable.innerHTML);
  //       // props.setHistory(draggable.innerHTML);
  //       draggable.style.left = data.downX + "px";
  //       draggable.style.top = data.downY + "px";
  //       // if (e.pageX === data.downX && e.pageY === data.downY) {
  //       //   draggable.style.display = "block";
  //       // }
  //       console.log(e.pageX, e.pageY);
  //       data = {};
  //       // разобрать
  //       draggable.onmouseup = null;
  //       draggable = null;
  //       // реализовать через 2й массив: удаляем значение из старого на стадии отжима кнопки и заполняем новый массив в новом стэйте. далее прокидываем этот массив для обновления истории
  //     };
  //   };
  // }

  // использзуем useEffect, чтобы при поиске нужных элементов, в случае их отсутствия, не было ошибки.
  // код запустится только после визуализации элементов
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll(".draggable"));
    // добавим обработчики каждому элементу истории
    elements.map((e) =>
      e.addEventListener("mouseenter", function (e) {
        drag(e);
      })
    );
  });
  // выводим все HTML- элементы родителя. Весь код, что в документе выше Dragging
  return <Box>{props.children}</Box>;
}
export default Dragging;
