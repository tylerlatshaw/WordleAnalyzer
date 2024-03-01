export type LetterResponseType = {
    results: [LetterResultType],
    next_cursor: string | null,
    has_more: boolean
}

export type LetterResultType = {
    id: string,
    created_time: Date,
    last_edited_time: Date,
    archived: boolean,
    properties: {
        Name: {
            id: string,
            title: [{
                plain_text: string
            }]
        },
        Position1Score: {
            id: string,
            number: number
        },
        Position2Score: {
            id: string,
            number: number
        },
        Position3Score: {
            id: string,
            number: number
        },
        Position4Score: {
            id: string,
            number: number
        },
        Position5Score: {
            id: string,
            number: number
        }
    }
}

export type PastWordResponseType = {
    results: [PastWordResultType],
    next_cursor: string | null,
    has_more: boolean
}

export type PastWordResultType = {
    id: string,
    created_time: Date,
    last_edited_time: Date,
    archived: boolean,
    properties: {
        WordleWordId: {
            id: string,
            number: number
        },
        PuzzleNumber: {
            id: string,
            number: number
        },
        Date: {
            id: string,
            title: [{
                plain_text: string
            }]
        },
    }
}

export type PossibleWordResponseType = {
    results: [PossibleWordResultType],
    next_cursor: string | null,
    has_more: boolean
}

export type PossibleWordResultType = {
    id: string,
    created_time: Date,
    last_edited_time: Date,
    archived: boolean,
    properties: {
        WordleWordId: {
            id: string,
            number: number
        },
        Word: {
            id: string,
            title: [{
                plain_text: string
            }]
        },
        Score: {
            id: string,
            number: number
        },
    }
}