import { defineStore } from "pinia";
import axios from "axios";

import type { Team } from "../types";

interface TeamsArray extends Array<Team> { }

export const useMainStore = defineStore('mainStore', {
    state: () => ({
        teams<TeamsArray>: null,
    }),
    getters: {
        getSearched(state){
            // function search(obj){
                
            // }
            return (value: String) => {
                if (value === "") return state.teams;
                let result: TeamsArray = []
                // console.log(state.teams)
                for (let team of state.teams) {
                    // console.log(team)
                    for(let key in team){
                        // console.log(key)
                        if (key === 'squad') continue;
                        if (team[key].toString().toLowerCase().indexOf(value) != -1) {
                            // console.log(team[key], key)
                            result.push(team)
                            break
    
                        }
                    }
                }
                console.log(result)
                return result
            }

            
        }
    },
    actions: {
        async fetchTeams() {
            const { data } = await useFetch('api/teams/')
            // console.log(data.value, data.value.data.teams)
            //Парсинг полученных данных необходим чтобы убрать все лишние поля из response-объекта
            const dataTyped: TeamsArray = data.value.data.teams.map(team => { 
                return {
                    id: team.id,
                    name: team.name,
                    venue: team.venue,
                    logoSrc: team.crest,
                    squad: team.squad,

                }
            }) 
            this.teams = dataTyped
        }
    },
  })