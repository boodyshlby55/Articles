// Delete Article
const btnDelete = document.querySelector("#delete")
const articleId = btnDelete.getAttribute("data-deleteArticle")
btnDelete.addEventListener("click", (e) => {
    fetch(`/articles/${articleId}`, { method: "DELETE" })
        .then((response) => response.json())
        .then((data) => window.location.href = data.articlesLink)
        .catch((err) => { console.log(err); })
})