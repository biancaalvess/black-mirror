document.addEventListener("DOMContentLoaded", (event) => {
    const banner = document.getElementById("banner")
    const title = document.querySelector("#banner h1")
    const slogan = document.getElementById("slogan")

    // Efeito de glitch no título e slogan
    title.classList.add("glitch")
    title.setAttribute("data-text", title.textContent)
    slogan.classList.add("glitch")
    slogan.setAttribute("data-text", slogan.textContent)

    // Efeito de distorção da realidade
    banner.addEventListener("mousemove", (e) => {
        const x = e.clientX / window.innerWidth
        const y = e.clientY / window.innerHeight

        banner.style.transform = `perspective(1000px) rotateY(${x * 20}deg) rotateX(${y * 20}deg)`
    })

    // Simulação de falha no sistema
    let glitchInterval
    banner.addEventListener("click", () => {
        if (glitchInterval) {
            clearInterval(glitchInterval)
            glitchInterval = null
            banner.style.filter = "none"
            return
        }

        glitchInterval = setInterval(() => {
            const glitchEffect = `
                    hue-rotate(${Math.random() * 360}deg)
                    saturate(${Math.random() * 10})
                    contrast(${Math.random() * 10})
                `
            banner.style.filter = glitchEffect
        }, 100)

        setTimeout(() => {
            if (glitchInterval) {
                clearInterval(glitchInterval)
                glitchInterval = null
                banner.style.filter = "none"
            }
        }, 5000)
    })

    // Mensagem subliminar
    const subliminais = [
        "Você está sendo observado",
        "A tecnologia controla você",
        "Realidade ou simulação?",
        "Seus dados não são seus",
    ]

    setInterval(() => {
        const mensagem = subliminais[Math.floor(Math.random() * subliminais.length)]
        const elem = document.createElement("div")
        elem.textContent = mensagem
        elem.style.position = "fixed"
        elem.style.color = "red"
        elem.style.fontSize = "20px"
        elem.style.opacity = "0"
        elem.style.transition = "opacity 0.5s"
        elem.style.left = `${Math.random() * window.innerWidth}px`
        elem.style.top = `${Math.random() * window.innerHeight}px`
        document.body.appendChild(elem)

        setTimeout(() => {
            elem.style.opacity = "1"
        }, 100)

        setTimeout(() => {
            elem.style.opacity = "0"
            setTimeout(() => {
                document.body.removeChild(elem)
            }, 500)
        }, 1000)
    }, 10000)

    // Código para o comportamento dos botões de like e dislike
    const teoriaCards = document.querySelectorAll(".teoria-card")

    teoriaCards.forEach((card) => {
        const likeBtn = card.querySelector(".like-btn")
        const dislikeBtn = card.querySelector(".dislike-btn")
        const likeCount = card.querySelector(".like-count")
        const dislikeCount = card.querySelector(".dislike-count")

        likeBtn.addEventListener("click", (e) => {
            e.stopPropagation()
            likeCount.textContent = Number.parseInt(likeCount.textContent) + 1
        })

        dislikeBtn.addEventListener("click", (e) => {
            e.stopPropagation()
            dislikeCount.textContent = Number.parseInt(dislikeCount.textContent) + 1
        })
    })
})
