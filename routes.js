const routes = require('express').Router();
const jsonTeam = require('./teams.json')
const hash_client = require('.//config').hash_client;

routes.get('/teams-player', (req, res) => {

    if (hash_client === req.headers.validation) {
        teams_player = [];
        for (let i = 0; teams_player.length < 8; i++) {

            // Get aleatory a team
            var team = jsonTeam[Math.floor(Math.random() * jsonTeam.length)];

            // Check if the team is in teams_player
            // In this case a  array no can repeat values
            let check_value = teams_player.find(player_team => {
                return player_team.id === team.id;
            });

            /* If a team is on teams player 
            no pushing value in response HTTP
            */
            (check_value) ? null : teams_player.push(team);

        };
        return res.status(200).send(
            {
                "Teams": teams_player,
                "SizeResponse": teams_player.length
            }
        );
    }
    else{
        return res.status(401).send(
            {
                "message" : `Invalid credentials`
            }
        );
    };



});


module.exports = routes;