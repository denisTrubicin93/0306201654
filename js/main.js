let doc = document.documentElement;
doc.setAttribute('data-useragent', navigator.userAgent);


let comments = [
    {
        name: 'Самуил',
        body: 'Привет, Верунь! ниче себе ты крутая. фотка класс!!!!',
        time: Math.floor(Date.now() / 1000)
    },
    {
        name: 'Лилия Семёновна',
        body: 'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?',
        time: Math.floor(Date.now() / 1000)
    },
    {
        name: 'Лилия Семёновна',
        body: 'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?',
        time: Math.floor(Date.now() / 1000)
    }
];

loadComments();



document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.keyCode == 13) {
        console.log('hello')
        event.preventDefault();
        document.getElementById("comment-add").click();
        return;
    };

})


document.getElementById('comment-add').onclick = function () {
    event.preventDefault();
    let commentName = document.getElementById('comment-name');
    let commentBody = document.getElementById('comment-body');

    let comment = {
        name: commentName.value,
        body: commentBody.value,
        time: Math.floor(Date.now() / 1000)
    }
    commentName.value = '';
    commentBody.value = '';
    comments.unshift(comment);

    saveComments();
    showComments();

}

function saveComments() {
    localStorage.setItem('comments', JSON.stringify(comments));
}

function loadComments() {
    if (localStorage.getItem('comments')) {
        comments = JSON.parse(localStorage.getItem('comments'));
    }
    showComments();
}

function showComments() {
    let commentSection = document.getElementById('comment_section');
    let out = '';
    comments.forEach(function (item) {
        out += `<li class="user_comment">
        <div class="info"><span class="user-name">${item.name} </span><span class="time">${timeConverter(item.time)}</span></div>
        <p id="comment_text">${item.body}</p>
        </li>`;
    });
    commentSection.innerHTML = out;
}



function timeConverter(UNIX_timestamp) {
    let a = new Date(UNIX_timestamp * 1000);
    let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    let year = a.getFullYear();
    let month = months[a.getMonth()];
    let date = a.getDate();
    let time = `${date} ${month} ${year}`;
    return time;
}
