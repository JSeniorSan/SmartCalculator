import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
// компонента-обертка для элементов
function Dragging(props) {
  function drag(element) {
    // обработка нажатия на конкретный элемент
    let draggable = element.target;
    console.log(draggable);
    // добавляем новый метод к элементу на нажатие левой кнопки мыши
    draggable.onmousedown = function (event) {
      // подготовка элемента к переносу
      draggable.style.position = "absolute";
      draggable.style.zIndex = "1000";
      //прокидываем элемент в body, чтобы он был в самом теле документа
      document.body.append(draggable);
      // создаем функцию отслеживания положения мыши по координатам с возможностью перемещения самого элемента
      // draggable.offsetWidth/2 нужен для центрирования
      function moveAt(pageX, pageY) {
        draggable.style.left = pageX - draggable.offsetWidth / 2 + "px";
        draggable.style.top = pageY - draggable.offsetHeight / 2 + "px";
      }
      // вызываем функцию
      moveAt(event.pageX, event.pageY);

      //

      let currentDroppable = null;
      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
        draggable.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        draggable.hidden = false;
        if (!elemBelow) return;
        let droppableBelow = elemBelow.closest(".droppagle");

        if (droppableBelow !== currentDroppable) {
          if (currentDroppable) {
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) {
            enterDroppable(currentDroppable);
          }
        }
      }
      // логика, когда переводимый элемент открепляется на нужном участке отжимом мыши
      function enterDroppable(elem) {
        // эвент лисенер на отжим кнопки
        draggable.onmouseup = function (elem) {
          draggable.style.display = "none";
          // вичисляется в результат значение предыдущего результата, нужного знака и переносимого элемента
          props.setResult(
            eval(`${props.result} ${elem.innerHTML} ${draggable.innerHtml}`)
          );
          document.removeEventListener("mousemove", onMouseMove);
          draggable.onmouseup = null;
          draggable = null;
          return;
        };
        draggable.style.cursor = "copy";
      }

      function leaveDroppable(elem) {
        elem.style.background = "";
        draggable.style.cursor = "default";
      }
      //   обработчик события при движении мыши (разобрать)
      document.addEventListener("mousemove", onMouseMove);

      //   описание отпускания мыши не в области
      draggable.onmouseup = function () {
        draggable.style.dispalay = "none";
        document.removeEventListener("mousemove", onMouseMove);
        props.setHistory(draggable.innerHTML);
        // разобрать
        draggable.onmouseup = null;
        draggable = null;
      };
    };
  }

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
