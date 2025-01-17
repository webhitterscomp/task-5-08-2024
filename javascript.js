document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll('.number-updater');
    const speed = 2750;
    let maxTarget = 10;
    let completedCounters = 0;


    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target-01');
        if (target > maxTarget) {
            maxTarget = target;
        }
    });

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target-01');
        const increment = target / speed;

        const updateCount = () => {
            let count = +counter.innerText;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, speed / maxTarget);
            } else {
                counter.innerText = target;
                completedCounters++;

                if (completedCounters === counters.length) {

                }
            }
        };

        counter.innerText = '0';
        updateCount();
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll('.number-updater');
    const speed = 400;
    let maxTarget = 10;
    let completedCounters = 0;


    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target-02');
        if (target > maxTarget) {
            maxTarget = target;
        }
    });

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target-02');
        const increment = target / speed;

        const updateCount = () => {
            let count = +counter.innerText;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, speed / maxTarget);
            } else {
                counter.innerText = target;
                completedCounters++;

                if (completedCounters === counters.length) {

                }
            }
        };

        counter.innerText = '0';
        updateCount();
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll('.number-updater');
    const speed = 2750;
    let maxTarget = 10;
    let completedCounters = 0;


    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target-03');
        if (target > maxTarget) {
            maxTarget = target;
        }
    });

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target-03');
        const increment = target / speed;

        const updateCount = () => {
            let count = +counter.innerText;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, speed / maxTarget);
            } else {
                counter.innerText = target;
                completedCounters++;

                if (completedCounters === counters.length) {

                }
            }
        };

        counter.innerText = '0';
        updateCount();
    });
});




const textContent = [
    "1...................Earum amet tempore enim eligendi temporibus laudantium vitae optio error iste badjbashbbb fewf efcawd ef Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing.ap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recentl.",
    "2...................Earum amet tempore enim eligendi temporibus laudantium vitae optio error iste badjbashbbb fewf efcawd ef Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing.ap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recentl.",
    "3...................Earum amet tempore enim eligendi temporibus laudantium vitae optio error iste badjbashbbb fewf efcawd ef Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing.ap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recentl.",
    "4...................Earum amet tempore enim eligendi temporibus laudantium vitae optio error iste badjbashbbb fewf efcawd ef Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing.ap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recentl.",
    "5...................Earum amet tempore enim eligendi temporibus laudantium vitae optio error iste badjbashbbb fewf efcawd ef Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing.ap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recentl."
];

const imageUrls = [
    "https://via.placeholder.com/300x210?text=Image+1",
    "https://via.placeholder.com/300x210?text=Image+2",
    "https://via.placeholder.com/300x210?text=Image+3",
    "https://via.placeholder.com/300x210?text=Image+4",
    "https://via.placeholder.com/300x210?text=Image+5",
];

function showContent(buttonNumber, buttonElement) {
    const textElement = document.getElementById('content-text');
    const imageElement = document.getElementById('content-image');

    // Hide content before changing it
    textElement.classList.remove('show');
    imageElement.classList.remove('show');

    // Wait for the hide animation to finish before updating content
    setTimeout(() => {
        textElement.innerText = textContent[buttonNumber - 1];
        imageElement.innerHTML = `<img style: "height: 100% ; width:100%;" class="d-block" src="${imageUrls[buttonNumber - 1]}" alt="Image ${buttonNumber}">`;

        // Show new content with animation
        textElement.classList.add('show');
        imageElement.classList.add('show');
    }, 500); // Delay to match the animation duration

    // Handle button active state
    const buttons = document.querySelectorAll('.btn-lg-group .btn-5');
    buttons.forEach(btn => btn.classList.remove('active'));
    buttonElement.classList.add('active');
}

// Initialize with default content
window.onload = function () {
    const defaultButton = document.getElementById('btn1');
    showContent(1, defaultButton);
    defaultButton.classList.add('active'); // Set default button as active
}

// =========================FAQ-section===========================
const questions = document.querySelectorAll('.first-question1');
const answers = document.querySelectorAll('.first-question2');

questions.forEach((question, index) => {
    question.addEventListener('click', function () {
        const answer = answers[index];
        if (answer.classList.contains('show')) {
            answer.classList.remove('show');
        } else {
            answers.forEach(ans => ans.classList.remove('show'));
            answer.classList.add('show');
        }
    });
});
// ==================btn-nad-image==============
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.btn-of-8th-btn');
    const textElement = document.getElementById('text');

    // Set the initial text content to be the default text
    updateText('1........Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit.');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            // Update the text based on the button ID
            switch (this.id) {
                case 'btn1':
                    updateText('1........Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit.');
                    break;
                case 'btn2':
                    updateText('2........Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit.');
                    break;
                case 'btn3':
                    updateText('3........Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit.');
                    break;
                case 'btn4':
                    updateText('4........Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit.');
                    break;
                case 'btn5':
                    updateText('5........Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit');
                    break;
                case 'btn6':
                    updateText('6........Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit.');
                    break;
                case 'btn7':
                    updateText('7........Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit.');
                    break;
                case 'btn8':
                    updateText('8........Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit.');
                    break;
                case 'btn9':
                    updateText('9........Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit.');
                    break;
                default:
                    updateText('1........Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum dignissimos, et hic repellat expedita soluta iure illo pariatur asperiores rem obcaecati rerum ex, deleniti repellendus delectus dicta molestias aut fugiat?Lorem ipsum dolor sit amet consectetur adipisicing elit.');
                    break;
            }

            // Remove highlight from all buttons
            buttons.forEach(btn => btn.classList.remove('highlight'));
            // Add highlight to the clicked button
            this.classList.add('highlight');
        });
    });

    function updateText(newText) {
        textElement.classList.remove('show');
        setTimeout(() => {
            textElement.textContent = newText;
            textElement.classList.add('show');
        }, 500); // Matches the transition duration for opacity
    }
});


