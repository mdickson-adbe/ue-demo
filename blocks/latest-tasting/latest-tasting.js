import {
  div, span, img, h2, h3,
} from '../../scripts/dom-helpers.js';
import { decorateIcons } from '../../scripts/aem.js';

export default async function decorate(block) {
  const tnsDescription = '';
  const tnsName = 'The Original';
  const tnsDate = '';
  const tnsAvg = '5.0';
  const tnsOrigin = 'USA';
  const tnsContributorName = 'Jackie Daytona';
  const tnsContributorTitle = 'Regular Human Bartender';

  const latestTNS = div(
    { class: 'latest-tns-wrapper' },
    div(
      { class: 'latest-tns-wrapper--image-wrapper' },
      div(
        { class: 'latest-tns oreo' },
        div({ class: 'top' }),
        div({ class: 'creme' }),
        div({ class: 'bottom' }),
      ),
      div({ class: 'latest-tns-description' }, tnsDescription),
    ),
    div(
      { class: 'latest-tns-wrapper--info-wrapper' },
      h2('Latest Oreo'),
      div(
        { class: 'latest-tns-name-wrapper' },
        span(tnsName),
      ),
      div(
        { class: 'latest-tns-display-date-wrapper' },
        span(tnsDate),
      ),
      div(
        { class: 'latest-tns-average-origin-wrapper' },
        span({ class: 'icon icon-star' }),
        span(tnsAvg),
        span({ class: 'icon icon-globe' }),
        span(tnsOrigin),
      ),
      div(
        { class: 'latest-tns-total-wrapper' },
      ),
      div(
        { class: 'latest-tns-highest-rating-wrapper' },
      ),
      div(
        { class: 'latest-tns-lowest-rating-wrapper' },
      ),
      div(
        { class: 'latest-tns-taste-wrapper' },
      ),
      div(
        { class: 'latest-tns-quotes-wrapper' },
      ),
      h3('Contributed By'),
      div(
        { class: 'latest-tns-contributed-by-wrapper' },
        img({ class: 'latest-tns-contributed-by-image', src: '/images/user-solid.svg' }),
        div(
          { class: 'latest-tns-contributed-by-member-wrapper' },
          div({ class: 'latest-tns-contributed-by-name' }, tnsContributorName),
          div({ class: 'latest-tns-contributed-by-title' }, tnsContributorTitle),
        ),
      ),
    ),
  );

  block.appendChild(latestTNS);
  decorateIcons(block);
}
