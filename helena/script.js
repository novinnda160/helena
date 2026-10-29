/* =====================================================
   CONFIGURAÇÕES
===================================================== */

const CONFIG = {

    whatsapp:
        "5531982663577",

    evento:
        "Aniversário da nossa pequena princesa",

    data:
        "2026-11-21T18:00:00",

    local:
        "Espaço Encanto",

    endereco:
        "Rua das Flores, 123 - Belo Horizonte - MG"

};


/* =====================================================
   LOADER
===================================================== */

window.addEventListener(
    "load",
    () => {

        setTimeout(
            () => {

                const loader =
                    document.getElementById(
                        "pageLoader"
                    );

                loader.classList.add(
                    "hide"
                );

            },
            900
        );

    }
);


/* =====================================================
   PARTICULAS
===================================================== */

function createParticles() {

    const container =
        document.getElementById(
            "particles"
        );

    const total = 45;


    for (
        let i = 0;
        i < total;
        i++
    ) {

        const particle =
            document.createElement(
                "span"
            );

        particle.className =
            "particle";


        const size =
            Math.random() * 4 + 2;


        particle.style.width =
            `${size}px`;

        particle.style.height =
            `${size}px`;


        particle.style.left =
            `${Math.random() * 100}%`;


        particle.style.animationDuration =
            `${Math.random() * 10 + 8}s`;


        particle.style.animationDelay =
            `${Math.random() * 8}s`;


        container.appendChild(
            particle
        );

    }

}

createParticles();


/* =====================================================
   COUNTDOWN
===================================================== */

function updateCountdown() {

    const target =
        new Date(
            CONFIG.data
        ).getTime();


    const now =
        new Date().getTime();


    const distance =
        target - now;


    if (distance <= 0) {

        document.getElementById(
            "days"
        ).textContent = "00";

        document.getElementById(
            "hours"
        ).textContent = "00";

        document.getElementById(
            "minutes"
        ).textContent = "00";

        document.getElementById(
            "seconds"
        ).textContent = "00";

        return;

    }


    const days =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (
                distance %
                (1000 * 60 * 60 * 24)
            ) /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (
                distance %
                (1000 * 60 * 60)
            ) /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (
                distance %
                (1000 * 60)
            ) /
            1000
        );


    document.getElementById(
        "days"
    ).textContent =
        String(days).padStart(
            2,
            "0"
        );


    document.getElementById(
        "hours"
    ).textContent =
        String(hours).padStart(
            2,
            "0"
        );


    document.getElementById(
        "minutes"
    ).textContent =
        String(minutes).padStart(
            2,
            "0"
        );


    document.getElementById(
        "seconds"
    ).textContent =
        String(seconds).padStart(
            2,
            "0"
        );

}


updateCountdown();


setInterval(
    updateCountdown,
    1000
);


/* =====================================================
   ADICIONAR CONVIDADOS
===================================================== */

const guestList =
    document.getElementById(
        "guestList"
    );


const addGuestButton =
    document.getElementById(
        "addGuest"
    );


function createGuestRow() {

    const row =
        document.createElement(
            "div"
        );

    row.className =
        "guest-row";


    row.innerHTML = `

        <input
            type="text"
            class="guest-input"
            placeholder="Nome do convidado"
        >

        <button
            type="button"
            class="remove-guest"
        >

            <i class="bi bi-trash3"></i>

        </button>

    `;


    guestList.appendChild(
        row
    );


    row.querySelector(
        ".remove-guest"
    ).addEventListener(
        "click",
        () => {

            const rows =
                guestList.querySelectorAll(
                    ".guest-row"
                );


            if (rows.length > 1) {

                row.remove();

            } else {

                row.querySelector(
                    "input"
                ).value = "";

            }

        }
    );

}


addGuestButton.addEventListener(
    "click",
    () => {

        createGuestRow();

        const rows =
            guestList.querySelectorAll(
                ".guest-row"
            );

        rows[
            rows.length - 1
        ]
        .querySelector(
            "input"
        )
        .focus();

    }
);


/* =====================================================
   REMOVER PRIMEIRO CONVIDADO
===================================================== */

document
    .querySelectorAll(
        ".remove-guest"
    )
    .forEach(
        button => {

            button.addEventListener(
                "click",
                () => {

                    const rows =
                        guestList.querySelectorAll(
                            ".guest-row"
                        );

                    const row =
                        button.closest(
                            ".guest-row"
                        );


                    if (
                        rows.length > 1
                    ) {

                        row.remove();

                    } else {

                        row.querySelector(
                            "input"
                        ).value = "";

                    }

                }
            );

        }
    );


/* =====================================================
   CONFIRMAÇÃO
===================================================== */

const form =
    document.getElementById(
        "rsvpForm"
    );


form.addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const responsavel =
            document.getElementById(
                "responsavel"
            )
            .value
            .trim();


        const observacao =
            document.getElementById(
                "observacao"
            )
            .value
            .trim();


        if (!responsavel) {

            alert(
                "Por favor, informe seu nome."
            );

            return;

        }


        const inputs =
            document.querySelectorAll(
                ".guest-input"
            );


        const convidados = [];


        inputs.forEach(
            input => {

                const nome =
                    input.value.trim();


                if (nome) {

                    convidados.push(
                        nome
                    );

                }

            }
        );


        let mensagem =

`👑 *CONFIRMAÇÃO DE PRESENÇA*

Olá! Gostaria de confirmar minha presença no aniversário. ✨

👤 *Responsável pela confirmação:*
${responsavel}

👥 *Pessoas que irão:*`;


        if (
            convidados.length
        ) {

            convidados.forEach(
                (nome, index) => {

                    mensagem +=
                        `\n${index + 1}. ${nome}`;

                }
            );

        } else {

            mensagem +=
                "\nApenas o responsável";

        }


        mensagem += `

🎂 *Evento:*
${CONFIG.evento}

📅 *Data:*
21 de novembro de 2026

🕕 *Horário:*
18:00

📍 *Local:*
${CONFIG.local}

📌 *Endereço:*
${CONFIG.endereco}`;


        if (observacao) {

            mensagem += `

📝 *Observação:*
${observacao}`;

        }


        mensagem += `

💚 *Presença confirmada!*`;


        const encoded =
            encodeURIComponent(
                mensagem
            );


        const whatsappURL =
            `https://wa.me/${CONFIG.whatsapp}?text=${encoded}`;


        showSuccess();


        setTimeout(
            () => {

                window.open(
                    whatsappURL,
                    "_blank"
                );

            },
            700
        );

    }
);


/* =====================================================
   TOAST
===================================================== */

function showSuccess() {

    const toast =
        document.getElementById(
            "successToast"
        );


    toast.classList.add(
        "show"
    );


    setTimeout(
        () => {

            toast.classList.remove(
                "show"
            );

        },
        4000
    );

}


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(
                entry => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: .12
        }
    );


revealElements.forEach(
    element => {

        revealObserver.observe(
            element
        );

    }
);


/* =====================================================
   PARALLAX SUAVE
===================================================== */

const hero =
    document.querySelector(
        ".hero"
    );


window.addEventListener(
    "scroll",
    () => {

        const scroll =
            window.scrollY;


        if (
            scroll <
            window.innerHeight
        ) {

            hero.style.backgroundPosition =
                `center ${scroll * .18}px`;

        }

    }
);


/* =====================================================
   EFEITO DE BRILHO NO MOUSE
===================================================== */

document.addEventListener(
    "mousemove",
    event => {

        const x =
            event.clientX /
            window.innerWidth;


        const y =
            event.clientY /
            window.innerHeight;


        document.documentElement
            .style
            .setProperty(
                "--mouse-x",
                `${x * 100}%`
            );


        document.documentElement
            .style
            .setProperty(
                "--mouse-y",
                `${y * 100}%`
            );

    }
);


/* =====================================================
   SMOOTH CLICK DOS BOTÕES
===================================================== */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(
        link => {

            link.addEventListener(
                "click",
                event => {

                    const target =
                        document.querySelector(
                            link.getAttribute(
                                "href"
                            )
                        );


                    if (target) {

                        event.preventDefault();


                        target.scrollIntoView({
                            behavior: "smooth"
                        });

                    }

                }
            );

        }
    );