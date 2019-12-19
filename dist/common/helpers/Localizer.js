"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var next_i18next_1 = __importDefault(require("next-i18next"));
var NextI18NextInstance = new next_i18next_1.default({
    defaultLanguage: "en",
    otherLanguages: ["vi", "id", "ms", "th", "zh"],
    localeSubpaths: {
        vi: "vi",
        id: "id",
        ms: "ms",
        th: "th",
        zh: "zh"
    }
});
exports.default = NextI18NextInstance;
exports.withTranslation = NextI18NextInstance.withTranslation, exports.appWithTranslation = NextI18NextInstance.appWithTranslation;
