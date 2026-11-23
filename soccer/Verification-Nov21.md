# World Cup Words — verified November 22, 2026

The deployment folder has `index.html` at its root. The separate standalone HTML embeds all 212 picture/audio assets and both fonts. Both versions run without missing resources.

- Checked 1,688 viewport states across both word sets, empty and completed models, text sizes 20 and 24, and eight laptop/Chromebook/tablet dimensions. No page/model scrolling or clipped controls. Welcome artwork and start controls fill their available panels.
- Verified 20 picture-only IDs, keyboard choice, per-picture/set resume, teacher PIN 259 isolation, three immediate word taps, separate completed-audio counts, and stopping audio on navigation.
- Verified 35 phonics placements, both integrated beginning-blend pages, three matching banks, 24 diagram labels across stadium/airport/boat, weather switching, and saved movable/returnable tiles.
- Verified correct-only cloze checkmarks on all three cloze pages in both sets: animated landing, persistent final check, removal after moving/swapping a correct word, no replay animation on reopening, and reduced motion.
- Verified conservation of nine balls, dropdown limits/returns, equal groups, division and multiplication answers, and saved allocations.
- Verified boxes of 1/10/100, exact loads of 28/127, stacking for 127 one-ball boxes, moving/returning boxes, immediate totals, and a horn only when a truck becomes correct. Reopening a correct load does not honk again.
- Tested real mouse and touch dragging, plus keyboard/tap placement, for picture pads, blends, diagram labels and truck boxes.
- Verified real Slow audio and the short horn in the HTTP deployment and the standalone. The 152 recording manifest matches the displayed curriculum. Isolated phonemes are normalized with no clipping and separated by deliberate pauses.
- All 40 activity print views fit one page. Both exported full reports contain 10 itemized pages; a complete record scores 123/123. Rendered reports and the final artwork sheets were visually inspected.

Artwork: 40 newly drawn soccer reading pictures, 14 new scene/model pictures, and five retained theme pictures. Full-resolution PNGs and exact built-in image_gen prompts/modes/paths are preserved in `CVC-Soccer-Learning-Illustrations-Nov21`; prompt notes accompany the deployment. The specifically approved original skipping-rope picture is retained.

The beginning-blend interaction adapts the existing Consolidated Reading model in `outputs/First-Dive-Deployment/content.js` and the first-two-letter construction pattern in `output/Adventures-Deployment-Nov-8/Word-and-Reading-Skills/Blend-Master/data.js`.

The source, uncompressed deployment and standalone were regenerated together. No new archive is needed to use or upload the folder.

## Voice correction — November 21

Word recordings now contain one spoken word. Sound recordings say the word once, followed by each slow, separated phoneme once, with no spoken preamble or repeated ending word. Correct/incorrect placement feedback is visual only. Rapid taps count without restarting or queuing an active recording; explicit replay works after it ends. Each cloze headphone now plays only its own sentence once and then stops. Whole-passage and automatic-next playback have been removed. Stop and navigation cancel the selected recording. Existing three-tap progress, slow speed, saved work and visual checkmarks remain available.

## Picture controls and staggered boxes — November 21

Both sentence-listening pages now show a matching soccer picture on every button. The selected button enlarges inside the activity while its recording plays once and returns to the ten-button grid at the end or on Stop/navigation. Other page controls remain visible. Loaded boxes show offset individual picture layers and the full count; dragging/removing moves one box at a time. Up to ten pictures represent a large stack, with an explicit shown-count label beyond ten.

The changed normal/expanded sentence pages, loaded trucks and 127-box stack passed 192 checks across both word sets, two text sizes and eight laptop/tablet dimensions. Mouse/touch dragging and keyboard removal/loading passed. All eight updated print views, including an active enlarged sentence, fit one page.

## Shorter drags, five-ball boxes and one-sentence cloze audio — November 22

All six letter/vowel/blend trays now sit below their pictured word gaps in both word sets, including the printed activities. A five-ball box joins the 1/10/100 supplies and is included in staggered loaded stacks, moving/returning, saved work, totals and the itemized report. Truck targets remain 28 and 127.

Each cloze sentence plays once only from its own headphones; there is no whole-passage button or automatic next sentence. Tile selection/placement and entering a page stay silent. Explicit replay and Stop remain available.

The changed empty/filled phonics pages, four-capacity truck loads/overshoots/largest stacks, and all three cloze pages passed 672 viewport checks across both word sets, default/largest text and eight laptop/Chromebook/tablet dimensions. Mouse/touch/keyboard dragging and saved five-ball loads passed. All 20 changed activity print views fit one page; the ten-page full report includes five-ball counts and correct 28/127 totals. The source, uncompressed root-index deployment and offline HTML are updated together.
