import { defineStore } from "pinia";
import axios from "axios";

import type { TeamsArray } from "../types";


export const useMainStore = defineStore('mainStore', {
    state: () => ({
        teams<TeamsArray>: [],
    }),
    getters: {
        getSearched(state){
            return (value: String): TeamsArray => {
                value = value.toLowerCase()
                if (value === "" || state.teams.length === 0) return state.teams;
                let result: TeamsArray = []
                for (let team of state.teams) {
                    for(let key in team){
                        if (key === 'squad' || key === "logoSrc" || key === "id" ) continue;
                        if (team[key].toString().toLowerCase().indexOf(value) != -1) {
                            result.push(team)
                            break
                        }
                    }
                }
                return result
            }

            
        }
    },
    actions: {
        async fetchTeams() {

            const { data } = await useFetch('api/teams/')
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