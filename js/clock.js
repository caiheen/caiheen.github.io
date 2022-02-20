const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); // setInterval이 1초 후에 로딩이 되기 때문에 먼저 호출 하는 용도
setInterval(getClock, 1000);
// setInterval(argument, sec(ms)); 어떤 함수를 몇초에 한번 반복하게 할 건지

// setTimeout(sayHello, 5000);
// setInterval(argument, sec(ms)); 어떤 함수를 몇초 후에 동작하게 할 건지

// padStart(2, "0"); string의 길이가 2가 아니라면 0을 추가
// padding start! 앞 부분에
// padEnd(2, "0"); 뒷 부분에 추가