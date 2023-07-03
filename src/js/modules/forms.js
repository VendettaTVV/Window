

const forms = () => {
    const form = document.querySelectorAll('form');
    inputs = document.querySelectorAll('input');
    phoneInputs = document.querySelectorAll('input[name="user_phone]');

    phoneInputs.forEach(item => {
        item.addEventListener('input', () => {
            item.value = item.value.replace(/\D/, '');
        })
    })

    const message = {
        loading: "Завантаження...",
        success: "Дякую! Ми з Вами зв'яжемося",
        failure: "Щось пішло не так..."
    }

    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    };

    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = ''
        });
    }

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            let statuMessage = document.createElement('div');
            statuMessage.classList.add('status');
            item.appendChild(statuMessage);

            const formData = new FormData(item);

            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statuMessage.textContent = message.success;
                })
                .catch(() => statuMessage.textContent = message.failure)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statuMessage.remove()
                    }, 5000)
                });
        });
    });

};

export default forms;