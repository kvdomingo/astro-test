import { atom } from "nanostores";

export const selectedVisual = atom<string | null>(null);

export const selectedText = atom<string | null>(null);

export const selectedAudio = atom<string | null>(null);
