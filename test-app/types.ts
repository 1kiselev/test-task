export type Player = {
    id: Number,
    name: String,
    position: String,
    dateOfBirth: String,
    nationality: String
}

export type Team = {
    id: Number,
    name: String,
    venue: String,
    logoSrc: String,
    squad: Array<Player>,
}