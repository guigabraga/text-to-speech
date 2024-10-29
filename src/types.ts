export interface IVoices {
    default: boolean,
    lang: string,
    localService: boolean,
    name: string,
    voiceURI: string
}

export interface ITextToSpeech {
    text: string,
    rate: number,
    voice: IVoices,
    synth: any
}