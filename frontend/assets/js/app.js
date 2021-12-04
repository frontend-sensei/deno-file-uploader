const form = document.getElementById('form')

async function submitHandler(event) {
    event.preventDefault()

    const formData = new FormData(form)
    const url = `${location.origin}${location.pathname}file`
    const options = {
        method: "post",
        body: formData
    }

    const response = await fetch(url, options)
}

form.addEventListener('submit', submitHandler)

