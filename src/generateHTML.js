const fs = require('fs');

function createCard(employee){
    role = employee.getRole()
    switch(role) {
        case 'Manager':
            label = "officeNumber"
            answer = employee.officeNumber
            icon = '<img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-coffee-cup-camping-kiranshastry-lineal-kiranshastry.png" style="width: 2rem;height: 2rem;" class="me-2"/>'
            break;
        case 'Engineer':
            label = "gitHub"
            answer = `<a href=https://github.com/${employee.getGithub()}>${employee.getGithub()}</a>`
            icon = '<img src="https://img.icons8.com/ios/50/000000/glasses.png" style="width: 2rem;height: 2rem;" class="me-2"/>'
            break;
        case 'Intern':
            label = "school"
            answer = employee.getSchool()
            icon = '<img src="https://img.icons8.com/ios-filled/50/000000/student-male--v1.png" style="width: 2rem;height: 2rem;" class="me-2"/>'
            break;
    }
    return `<div class="card m-2 shadow" style="width: 18rem;">
                <div class="card-body bg-primary text-white">
                    <h5 class="card-title">${employee.getName()}</h5>
                    <div class="d-flex flex-row">
                        ${icon}
                        <h5 class="card-title">${employee.getRole()}</h5>
                    </div>
                </div>
                <div class="card-body bg-light">
                    <ul class="list-group list-group-flush m-2">
                        <li class="list-group-item">id: ${employee.getId()}</li>
                        <li class="list-group-item">email: <a href="mailto: ${employee.getEmail()}">${employee.getEmail()}</a></li>
                        <li class="list-group-item">${label}: ${answer}</li>
                    </ul>
                </div>
            </div>`
}

function makeHTMLFile(team){
    html = generateHTML(team)
    fs.writeFile('dist/index.html', html, (err) =>
      err ?  console.log(err) : console.log('Please see the "dist" folder for your webpage!')
    );
}

function generateHTML(team){
    const card = []
    card.push(createCard(team.manager))
    card.push(...team.employees.map(employee => createCard(employee)))
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <title>My Team</title>
    </head>
    <body>
        <header>
            <nav class="navbar justify-content-center bg-danger text-white py-5 fs-1 fw-bold">My Team</nav>    
        </header>
        <main class="d-flex flex-wrap justify-content-center">
            ${card.join('\n')}
        </main>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    </body>
    </html>
    `
}

module.exports = makeHTMLFile