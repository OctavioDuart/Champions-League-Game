const all_teams = require('./teams.json');

let verify_id = true;
let verify_titles = true;


(function verifyID() {
    all_teams.forEach((team, i) => {
        if (team.id - 1 !== i) {
            verify_id = false;
            //console.error(`${team.name} não passou no teste ! - (teste ID) `)
        };
    });
})();

(function verifyTitles() {
    all_teams.forEach(team => {
        if (team.titles === 0 && team.viceTitles === 0) {
            verify_titles = false;
            //console.error(`${team.name} não passou no teste ! - (teste Titulos) `)
        };
    });
})();


(verify_id) ? console.log(`Teste de ID - OK`) : console.error(`Teste de ID - Não Passou`);
(verify_titles) ? console.log(`Teste de Titulos - OK`) : console.error(`Teste de Titulos - Não Passou`);