import { Box, Button } from "@chakra-ui/react";
import { useEffect } from "react";
// компонента-обертка для элементов
function Dragging(props) {
  function drag(e) {
    // сонтэйнер для хранения координат
    let container = {};
    let element = e.target.closest(".draggable");
    //прослушиние событий при нажатии на кнопку
    element.onmousedown = function (e) {
      if (!element) return;

      shift(e);

      element.style.position = "absolute";
      element.style.zIndex = 9999;
      document.body.append(element);

      element.style.left = e.pageX - container.shiftX + "px";
      element.style.top = e.pageY - container.shiftY + "px";

      moveAt(e.pageX, e.pageY);
      // переменная для хранения элемента, куда были наведены с классом droppable
      let currentTarget = null;
      // прослушивание события движения мышки
      function onMouseMove(e) {
        if (!element) return;
        moveAt(e.pageX, e.pageY);
        // --
        // проверка под курсором нужной области при перемещении
        element.hidden = true;
        let elementBelow = document.elementFromPoint(e.clientX, e.clientY);
        element.hidden = false;
        // ----
        if (!elementBelow) return;
        // поиск ближайшего droppable
        let droppableBelow = elementBelow.closest(".droppable");
        // проверка на то, вышел ли курсор с элементом из droppable или вошел
        if (currentTarget != droppableBelow) {
          if (currentTarget) {
            leaveDroppable(currentTarget);
            console.log("Вышел");
          }

          currentTarget = droppableBelow;
          if (currentTarget) {
            enterDroppable(currentTarget);
          }
        }
        function leaveDroppable(droppable) {
          droppable.style.boxShadow = "0 0 0 0";
        }
        function enterDroppable(droppable) {
          droppable.style.boxShadow = "0 0 10px 1px green";
          console.log("Вошел");
        }
      }
      document.addEventListener("mousemove", onMouseMove);
      // обработчик на отжатие клика
      element.onmouseup = function (e) {
        try {
          // убираем событие движения
          document.removeEventListener("mousemove", onMouseMove);
          // вычисляем результат, если отжали на droppable элементе
          if (currentTarget) {
            props.setResult(
              eval(
                `${props.result} ${currentTarget.innerHTML} ${element.innerHTML} `
              )
            );
            rollback();
            currentTarget.style.boxShadow = "0 0 0 0";
          } else {
            rollback();
          }
          // удаляем событие отклика
          element.onmouseup = null;
        } catch {
          alert("ooops....");
          rollback();
          currentTarget.style.boxShadow = "0 0 0 0";
        }
      };
    };
    // отключаем встроенный в браузер dnd
    element.ondragstart = function () {
      return false;
    };
    // возврат на исходную
    function rollback() {
      document.querySelector(".history-box").append(element);
      element.style.position = "static";
    }
    // присваивание координат при изменении положения курсора
    function moveAt(pageX, pageY) {
      element.style.left = pageX - container.shiftX + "px";
      element.style.top = pageY - container.shiftY + "px";
    }
    // вычисляем нужные координаты и сохрянем в контейнер
    function shift(e) {
      let shiftX = e.clientX - element.getBoundingClientRect().left;
      let shiftY = e.clientY - element.getBoundingClientRect().top;
      container.shiftX = shiftX;
      container.shiftY = shiftY;
      container.left = e.pageX;
      container.top = e.pageY;
    }
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
