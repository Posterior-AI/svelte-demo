/**
 * BYOB Badge - "Built with BYOB" attribution badge
 * This script creates a floating badge that links to https://byob.studio/
 *
 * Behaviour:
 *  - Desktop: pill with logo + text. Auto-hides to 20% opacity after 4 s,
 *    restores to full opacity on hover.
 *  - Mobile (≤ 640 px): collapses to a 40×40 circle (logo only) so it never
 *    covers content. Same auto-hide timing. Tap restores opacity and opens
 *    the link on the second tap.
 */
(function () {
    'use strict';

    var AUTO_HIDE_DELAY = 4000; // ms before fading out
    var HIDDEN_OPACITY  = 0.2;
    var FULL_OPACITY    = 1;

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createBadge);
    } else {
        createBadge();
    }

    function createBadge() {
        var badge = document.createElement('a');
        badge.href   = 'https://byob.studio/';
        badge.target = '_blank';
        badge.rel    = 'noopener noreferrer';
        badge.id     = 'byob-badge';

        badge.innerHTML =
            '<img src="https://byob.studio/icons/byob-logo.svg"' +
            '     alt="BYOB Logo" width="16" height="16" class="byob-logo" />' +
            '<span class="byob-label">Built with <span class="byob-highlight">BYOB</span></span>';

        var style = document.createElement('style');
        style.textContent = [
            /* ── base (desktop pill) ─────────────────────────────── */
            '#byob-badge {',
            '  position: fixed;',
            '  bottom: calc(16px + env(safe-area-inset-bottom, 0px));',
            '  right:  calc(16px + env(safe-area-inset-right,  0px));',
            '  display: flex;',
            '  align-items: center;',
            '  gap: 6px;',
            '  padding: 8px 12px;',
            '  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);',
            '  border: 1px solid rgba(255,255,255,0.1);',
            '  border-radius: 8px;',
            '  color: #fff;',
            '  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;',
            '  font-size: 12px;',
            '  font-weight: 500;',
            '  text-decoration: none;',
            '  box-shadow: 0 4px 12px rgba(0,0,0,0.15);',
            '  backdrop-filter: blur(8px);',
            '  z-index: 9999;',
            '  opacity: 1;',
            '  transition: opacity 0.4s ease, transform 0.2s ease, box-shadow 0.2s ease;',
            '  touch-action: manipulation;',
            '}',

            '#byob-badge:hover, #byob-badge:focus-visible {',
            '  opacity: 1 !important;',
            '  transform: translateY(-2px);',
            '  box-shadow: 0 6px 16px rgba(0,0,0,0.2);',
            '  outline: none;',
            '}',

            '#byob-badge .byob-highlight {',
            '  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);',
            '  -webkit-background-clip: text;',
            '  -webkit-text-fill-color: transparent;',
            '  background-clip: text;',
            '  font-weight: 700;',
            '}',

            /* ── mobile circle ───────────────────────────────────── */
            '@media (max-width: 640px) {',
            '  #byob-badge {',
            '    width: 40px;',
            '    height: 40px;',
            '    padding: 0;',
            '    border-radius: 50%;',
            '    justify-content: center;',
            '    bottom: calc(12px + env(safe-area-inset-bottom, 0px));',
            '    right:  calc(12px + env(safe-area-inset-right,  0px));',
            '    box-shadow: 0 2px 8px rgba(0,0,0,0.25);',
            '  }',
            '  #byob-badge .byob-label { display: none; }',
            '  #byob-badge .byob-logo  { width: 20px; height: 20px; }',
            '}',
        ].join('\n');

        document.head.appendChild(style);
        document.body.appendChild(badge);

        /* ── auto-hide logic ─────────────────────────────────────── */
        var hideTimer = setTimeout(function () {
            badge.style.opacity = HIDDEN_OPACITY;
        }, AUTO_HIDE_DELAY);

        // Desktop: hover restores opacity (handled by CSS :hover rule above).
        // Mobile: first tap restores opacity; second tap follows the link.
        var restored = false;
        badge.addEventListener('click', function (e) {
            if (parseFloat(getComputedStyle(badge).opacity) < FULL_OPACITY - 0.1) {
                // Badge is faded — restore it and block navigation this tap.
                e.preventDefault();
                badge.style.opacity = FULL_OPACITY;
                restored = true;

                // Re-hide after another delay if the user doesn't interact.
                clearTimeout(hideTimer);
                hideTimer = setTimeout(function () {
                    badge.style.opacity = HIDDEN_OPACITY;
                    restored = false;
                }, AUTO_HIDE_DELAY);
            }
            // If already fully visible, the default href navigation fires normally.
        });
    }
})();
