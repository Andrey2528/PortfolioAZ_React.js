/**
 * Картки портфоліо з кейсів Harbor.
 *
 * Дані генерує Harbor («Експорт на сайт») у harborCases.js; тут — лише
 * переклад у форму, яку чекають картка й модальне вікно, поточною мовою.
 * Мова сайту без перекладу отримує український текст — так вирішує
 * експорт, а не сайт.
 */
import { harborCases } from './harborCases';

const LANGS = ['uk', 'en', 'ru'];

const yearOf = (date) => (date ? date.slice(0, 4) : '');

export function getCards(language) {
    const lang = LANGS.includes(language) ? language : 'en';
    return harborCases.map((item, index) => {
        const text = item.i18n[lang] ?? item.i18n.uk;
        const cover = item.images[0];
        return {
            // Номер на картці: найсвіжіша робота — найбільший номер.
            id: harborCases.length - index,
            slug: item.slug,
            title: text.name,
            subTitle: text.kind,
            year: yearOf(item.startedAt),
            design: item.ownDesign ? '+' : '-',
            role: text.roles.join(', '),
            tag: item.stack.join(', '),
            type: text.kind,
            url: item.url,
            company: item.client,
            img: cover.img,
            thumb: cover.thumb,
            thumbSm: cover.thumbSm,
            summary: text.summary,
            description: text.description,
            gallery: item.images.map((image, k) => ({
                ...image,
                caption: text.captions[k] ?? '',
            })),
        };
    });
}

export default getCards;
