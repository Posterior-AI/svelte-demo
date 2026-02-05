/**
 * BYOB Badge - "Built with BYOB" attribution badge
 * This script creates a floating badge that links to https://byob.studio/
 */
(function () {
    'use strict';

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createBadge);
    } else {
        createBadge();
    }

    function createBadge() {
        const badge = document.createElement('a');
        badge.href = 'https://byob.studio/';
        badge.target = '_blank';
        badge.rel = 'noopener noreferrer';
        badge.id = 'byob-badge';

        badge.innerHTML = `
      <img src="https://byob.studio/icons/byob-logo.svg" alt="BYOB Logo" width="16" height="16" />
      Built with <span class="byob-highlight">BYOB</span>
    `;

        // Add styles
        const style = document.createElement('style');
        style.textContent = `
      #byob-badge {
        position: fixed;
        bottom: 16px;
        right: 16px;
        display: flex;
        align-items: center;
        gap: 6px;
        padding: 8px 12px;
        background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        color: #fff;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 12px;
        font-weight: 500;
        text-decoration: none;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        backdrop-filter: blur(8px);
        transition: all 0.2s ease;
        z-index: 9999;
      }
      
      #byob-badge:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
      }
      
      #byob-badge .byob-highlight {
        background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        font-weight: 700;
      }
    `;

        document.head.appendChild(style);
        document.body.appendChild(badge);
    }
})();
