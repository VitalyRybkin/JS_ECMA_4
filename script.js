const getUserData = async (id) => {
    const response = await fetch(`https://reqres.in/api/users/${id}`)
    const user = await response.json()
        console.log("1. Получение данных о пользователе:")
    if (response.ok) await Promise.resolve(user).then(() => {
        console.log(user.data)
    })
    else Promise.reject(user)
        .catch(() => {
            console.error(`User with id=${id} not found!`)
    })
}

getUserData(23333).then()
getUserData(2).then()

const saveUserData = (user) => {
    fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(response => response.json())
        .then((response) => {
            console.log("2. Отправка данных на сервер:")
            console.log("User data saved successfully!")
            console.log(response)
        })
        .catch(error => {
            console.log(error.message)
        })
}

const user = {
    name: 'Vitaly Rybkin',
    job: 'frontend developer'
}

saveUserData(user)

async function changeStyleDelayed(elem, delay) {
    await new Promise(resolve => setTimeout(resolve, delay));
    console.log("3. Изменение стиля элемента через заданное время")
    const getElem = document.querySelector(`.${elem}`)
    getElem.style.boxShadow = "10px 10px 25px -3px rgba(0,0,0,0.75)"
    console.log(getElem.style.boxShadow)
}
changeStyleDelayed('myElement', 2000).then()