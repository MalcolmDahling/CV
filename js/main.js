document.getElementById('viewRepos').addEventListener('click', function(){
    document.body.insertAdjacentHTML('beforeend', `
    <div id="reposDiv">
        <input type="button" id="reposDivClose" value="X">
    </div>
    `);

    document.getElementById('reposDivClose').addEventListener('click', function(){
        document.getElementById('reposDiv').remove();
    });
});


document.getElementById('backgroundOverlay').addEventListener('click', function(){
    document.getElementById('reposDiv').remove();
});

