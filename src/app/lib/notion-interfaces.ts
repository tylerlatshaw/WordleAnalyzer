export interface NotionScore {
    id: string,
    number: number
}

export interface NotionWordleWordsId {
    id: string,
    number: number
}

export interface NotionWord {
    id: string,
    title: { plain_text: string }
}

export interface NotionWordList {
    id: string,
    properties: {
        "Score": NotionScore,
        "WordleWordsId": NotionWordleWordsId,
        "Word": NotionWord
    }
}