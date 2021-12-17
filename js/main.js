document.getElementById('viewRepos').addEventListener('click', function(){

    document.body.insertAdjacentHTML('beforeend', `
    <div id="backgroundOverlay2"></div>
    <div id="reposDiv">
        <input id="reposDivClose" type="button" value="X">
    </div>
    `);



    fetch('https://api.github.com/users/MalcolmDahling/repos')
        .then(response => response.json())
        .then(data => fetchRepos(data));


    function fetchRepos(data){
        for(let i = 0; i < data.length; i++){



            document.getElementById('reposDiv').insertAdjacentHTML('beforeend', `
            <a href="` + data[i].html_url + `"`
            + (data[i].description && data[i].description.includes('Extra övning') ? `class="extra"` : null)+`>`
            + (data[i].description == null ? data[i].name : data[i].description)+`</a>`);
        }
    }

    document.getElementById('reposDivClose').addEventListener('click', reposDivRemove);
    document.getElementById('backgroundOverlay2').addEventListener('click', reposDivRemove);
});




function reposDivRemove(){
    document.getElementById('reposDiv').remove();
    document.getElementById('backgroundOverlay2').remove();
}
