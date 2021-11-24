import { loremIpsum } from "lorem-ipsum";
import { headerKeys } from "../../headers";
import deepClone from "../../helpers";
import { NfoData } from "../../NfoWriter";
import { currentDataVersion } from "../../NfoWriterSettings";
import { blankNfoSectionData } from "../partials/blank";
import defaultNfoSectionCredits from "../partials/credits";
import defaultNfoSectionReleaseNotes from "../partials/releaseNotes";

function randInt(max: number) {
    return Math.floor(Math.random() * max);
}

export const loremIpsumNfo = (): NfoData => {
    const header = headerKeys[randInt(headerKeys.length)];

    const releaseNotes = deepClone(defaultNfoSectionReleaseNotes);
    releaseNotes.header = loremIpsum({ count: 2, units: "words" });
    releaseNotes.sectionData.subsections[0].text = [loremIpsum({ count: 1, units: "paragraphs" })];

    const sampleSection = deepClone(blankNfoSectionData);
    sampleSection.header = loremIpsum({ count: 4, units: "words" });
    sampleSection.sectionData.subsections.push({
        subheader: "",
        text: [loremIpsum({ count: 1, units: "paragraphs" })],
        textStyle: "left"
    });
    sampleSection.sectionData.subsections.push({
        subheader: loremIpsum({ count: 3, units: "words" }),
        text: [loremIpsum({ count: 1, units: "paragraphs" })],
        textStyle: "center"
    });
    sampleSection.sectionData.subsections.push({
        subheader: loremIpsum({ count: 3, units: "words" }),
        text: [loremIpsum({ count: 1, units: "paragraphs" })],
        textStyle: "right"
    });
    sampleSection.sectionData.subsections.push({
        subheader: loremIpsum({ count: 3, units: "words" }),
        text: [
            loremIpsum({ count: 3, units: "words" }),
            loremIpsum({ count: 1, units: "paragraphs" })
        ],
        textStyle: "twoCol"
    });
    sampleSection.sectionData.subsections.push({
        subheader: loremIpsum({ count: 3, units: "words" }),
        text: Array.from(Array(10).keys()).map(() => { return loremIpsum({ count: 2, units: "sentences" }) }),
        textStyle: "numList"
    });

    const credits = deepClone(defaultNfoSectionCredits);
    credits.sectionData.subsections[0].text = loremIpsum({ count: 3, units: "words" }).split(" ");
    credits.sectionData.subsections[1].text = loremIpsum({ count: 6, units: "words" }).split(" ");
    credits.sectionData.subsections[2].text = loremIpsum({ count: 12, units: "words" }).split(" ");

    return {
        dataVersion: currentDataVersion,
        header: header,
        headerAlign: "center",
        title: loremIpsum({ count: 3, units: "words" }),
        description: loremIpsum({ count: 1, units: "sentences", sentenceLowerBound: 10, sentenceUpperBound: 12 }),
        version: randInt(10) + "." + randInt(50) + "." + randInt(100),
        content: [
            releaseNotes,
            sampleSection,
            credits,
        ],
    };
};

export default loremIpsumNfo;