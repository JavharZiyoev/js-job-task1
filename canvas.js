window.addEventListener('load', () => {
    const canvas1 = document.querySelector("#canvas1");
    const canvas2 = document.querySelector("#canvas2");

    const canvas1_ctx = canvas1.getContext('2d');
    const canvas2_ctx = canvas2.getContext('2d');

    canvas1.height = "600";
    canvas1.width = "600";
    canvas2.height = "50";
    canvas2.width = "600";

    // vars
    let stars = [
        { name: "red", positionX: 100, positionY: 100, color: "red" },
        { name: "blue", positionX: 100, positionY: 200, color: "blue" },
        { name: "green", positionX: 200, positionY: 100, color: "green" },
        { name: "yellow", positionX: 200, positionY: 200, color: "yellow" },
        { name: "black", positionX: 300, positionY: 100, color: "black" },
    ];

    function drawStar(cx, cy, color, ctx) {
        var rot = Math.PI / 2 * 3;
        var x = cx;
        var y = cy;
        var step = Math.PI / 5;

        ctx.strokeSyle = "#000";
        ctx.beginPath();
        ctx.moveTo(cx, cy - 30)
        for (i = 0; i < 5; i++) {
            x = cx + Math.cos(rot) * 30;
            y = cy + Math.sin(rot) * 30;
            ctx.lineTo(x, y)
            rot += step

            x = cx + Math.cos(rot) * 18;
            y = cy + Math.sin(rot) * 18;
            ctx.lineTo(x, y)
            rot += step
        }
        ctx.lineTo(cx, cy - 30)
        ctx.closePath();
        ctx.lineWidth = 3;
        ctx.strokeStyle = "gray";
        ctx.stroke();
        ctx.fillStyle = color;
        ctx.fill();
    }


    //
    stars.forEach(star => {
        drawStar(star.positionX, star.positionY, star.color, canvas1_ctx);
    });

    canvas1.addEventListener("click", function (e) {
        let rect = canvas1.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

        let color = canvas1_ctx.getImageData(x, y, 1, 1).data;
        canvas2.style = `background: rgba(${color[0]}, ${color[1]}, ${color[2]}, ${color[3]})`;

    });

});