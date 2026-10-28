* {
  box-sizing: border-box;
}

:root {
  --bg: #09111f;
  --bg-soft: #111b2d;
  --panel: rgba(17, 27, 45, 0.88);
  --panel-strong: #101b2e;
  --card: #14213d;
  --card-alt: #16253c;
  --muted: #a2aec9;
  --text: #edf3ff;
  --primary: #6ea8fe;
  --primary-strong: #4d7cff;
  --purple: #8f7af7;
  --green: #49d39a;
  --orange: #ffb454;
  --red: #ff7f7f;
  --line: rgba(255, 255, 255, 0.08);
  --shadow: 0 24px 50px rgba(8, 16, 23, 0.4);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Inter", sans-serif;
  background: radial-gradient(circle at top left, #101d32 0%, var(--bg) 28%, #050b15 100%);
  color: var(--text);
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font: inherit;
}

.app-shell {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 260px;
  background: rgba(11, 21, 36, 0.72);
  border-right: 1px solid var(--line);
  padding: 28px 22px;
  position: sticky;
  top: 0;
  height: 100vh;
}

.brand-block {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 34px;
}

.brand-block.compact {
  margin-bottom: 0;
}

.brand-mark {
  width: 42px;
  height: 42px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  font-weight: 800;
  background: linear-gradient(135deg, var(--primary), var(--purple));
  color: white;
  box-shadow: var(--shadow);
}

.eyebrow {
  margin: 0 0 4px;
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--muted);
}

.brand-block h1,
.topbar h2,
.panel-header h3,
.hero-panel h3,
.profile-meta h2,
.vendor-hero h2 {
  margin: 0;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nav-link {
  padding: 12px 14px;
  border-radius: 12px;
  color: var(--muted);
  transition: 0.2s ease;
}

.nav-link:hover,
.nav-link.active {
  background: rgba(110, 168, 254, 0.12);
  color: var(--text);
}

.sidebar-card {
  margin-top: 24px;
  padding: 18px 16px;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: linear-gradient(180deg, rgba(22, 37, 60, 0.7), rgba(12, 22, 40, 0.7));
}

.sidebar-card h3 {
  margin: 0 0 16px;
}

.progress-track {
  width: 100%;
  height: 10px;
  border-radius: 999px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.06);
  margin-bottom: 10px;
}

.progress-track span {
  display: block;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, var(--green), #7ce5ca);
}

.main-panel {
  flex: 1;
  padding: 30px 32px 40px;
}

.topbar,
.page-header,
.panel-header,
.stat-header,
.vendor-hero,
.profile-shell,
.vendor-shell {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
}

.topbar {
  margin-bottom: 28px;
}

.topbar-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.ghost-btn,
.primary-btn,
.seg-btn {
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 10px 16px;
  background: rgba(255, 255, 255, 0.03);
  color: var(--text);
  cursor: pointer;
}

.primary-btn {
  background: linear-gradient(135deg, var(--primary), var(--primary-strong));
  border: none;
  box-shadow: 0 18px 40px rgba(110, 168, 254, 0.3);
}

.avatar-pill {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid rgba(255, 255, 255, 0.12);
}

.stats-grid,
.insight-grid,
.vendor-metrics {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px;
}

.stat-card,
.mini-card,
.card-surface,
.panel {
  background: rgba(20, 33, 61, 0.9);
  border: 1px solid var(--line);
  border-radius: 22px;
  box-shadow: var(--shadow);
}

.stat-card {
  padding: 20px 18px;
}

.accent-blue {
  background: linear-gradient(180deg, rgba(71, 118, 255, 0.18), rgba(14, 23, 40, 0.9));
}

.accent-purple {
  background: linear-gradient(180deg, rgba(143, 122, 247, 0.16), rgba(14, 23, 40, 0.9));
}

.accent-green {
  background: linear-gradient(180deg, rgba(73, 211, 154, 0.14), rgba(14, 23, 40, 0.9));
}

.accent-orange {
  background: linear-gradient(180deg, rgba(255, 180, 84, 0.14), rgba(14, 23, 40, 0.9));
}

.stat-header {
  margin-bottom: 18px;
  color: var(--muted);
  font-size: 14px;
}

.trend {
  font-size: 12px;
  padding: 6px 8px;
  border-radius: 999px;
  font-weight: 600;
}

.trend.up {
  background: rgba(73, 211, 154, 0.12);
  color: #88f0c2;
}

.trend.down {
  background: rgba(255, 127, 127, 0.12);
  color: #ff9d9d;
}

.stat-card h3,
.mini-card h3 {
  margin: 0 0 8px;
  font-size: clamp(1.5rem, 2vw, 2.2rem);
}

.stat-card small,
.mini-card small,
.muted {
  color: var(--muted);
}

.content-grid {
  margin-top: 24px;
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(280px, 1fr);
  gap: 20px;
}

.panel,
.card-surface {
  padding: 22px 20px;
}

.panel-header {
  margin-bottom: 20px;
}

.segmented-control {
  display: inline-flex;
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 4px;
  background: rgba(255, 255, 255, 0.02);
}

.seg-btn {
  border: none;
  background: transparent;
  color: var(--muted);
}

.seg-btn.active {
  background: rgba(110, 168, 254, 0.14);
  color: var(--text);
}

.chart-area {
  position: relative;
  height: 240px;
  border-radius: 18px;
  background: linear-gradient(180deg, rgba(17, 27, 45, 0.9), rgba(11, 17, 29, 0.9));
  border: 1px solid var(--line);
  overflow: hidden;
}

.grid-lines {
  position: absolute;
  inset: 0;
  background-image: linear-gradient(to top, rgba(255, 255, 255, 0.04) 1px, transparent 1px);
  background-size: 100% 25%;
}

.bars {
  position: absolute;
  inset: 0;
  padding: 20px 20px 14px;
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 14px;
}

.bars span {
  display: block;
  width: 100%;
  background: linear-gradient(180deg, var(--primary), var(--purple));
  border-radius: 12px 12px 0 0;
  box-shadow: 0 0 16px rgba(110, 168, 254, 0.3);
}

.task-list,
.order-list,
.review-list,
.feed-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.task-list li,
.feed-item,
.order-list li,
.review-list li,
.saved-item {
  display: flex;
  align-items: center;
  gap: 14px;
}

.task-indicator,
.feed-badge {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  flex-shrink: 0;
}

.task-indicator.success,
.feed-badge.green {
  background: var(--green);
}

.task-indicator.warning,
.feed-badge.orange {
  background: var(--orange);
}

.task-indicator.info,
.feed-badge.blue {
  background: var(--primary);
}

.task-list strong,
.feed-item strong,
.order-list strong,
.review-list strong,
.saved-item strong,
.catalog-item strong {
  display: block;
  margin-bottom: 4px;
}

.task-list small,
.feed-item small,
.order-list small,
.review-list small,
.saved-item small,
.catalog-item small {
  color: var(--muted);
}

.bottom-grid {
  margin-top: 24px;
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(260px, 1fr);
  gap: 20px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  text-align: left;
  padding: 12px 10px;
  border-bottom: 1px solid var(--line);
  color: var(--text);
}

th {
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--muted);
  font-weight: 600;
}

.product-cell,
.saved-item,
.catalog-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.mini-thumb {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: inline-block;
  background: linear-gradient(135deg, #6ea8fe, #8f7af7);
}

.mini-thumb.two {
  background: linear-gradient(135deg, #4bd7a5, #7ce5ca);
}

.mini-thumb.three {
  background: linear-gradient(135deg, #ffb454, #ff8e72);
}

.mini-thumb.four {
  background: linear-gradient(135deg, #f577d8, #9a7af7);
}

.feed-item {
  padding: 12px 0;
  border-bottom: 1px solid var(--line);
}

.feed-item:last-child {
  border-bottom: none;
}

.page-header {
  max-width: 1280px;
  margin: 0 auto;
  padding: 24px 28px 8px;
}

.page-nav {
  display: inline-flex;
  gap: 8px;
  border: 1px solid var(--line);
  background: rgba(255, 255, 255, 0.02);
  border-radius: 16px;
  padding: 8px;
}

.page-nav a {
  padding: 10px 14px;
  border-radius: 12px;
  color: var(--muted);
}

.page-nav a.active {
  background: rgba(110, 168, 254, 0.12);
  color: var(--text);
}

.profile-shell,
.vendor-shell {
  max-width: 1280px;
  margin: 18px auto 0;
  padding: 0 28px 40px;
  align-items: flex-start;
}

.profile-shell {
  gap: 22px;
}

.profile-sidebar {
  width: 320px;
}

.profile-avatar-lg {
  width: 120px;
  height: 120px;
  overflow: hidden;
  border-radius: 28px;
  margin: 0 auto 18px;
  border: 2px solid rgba(255, 255, 255, 0.08);
}

.profile-meta {
  text-align: center;
  margin-bottom: 18px;
}

.profile-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin: 18px 0;
}

.profile-stats div {
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: center;
  padding: 12px 8px;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.02);
}

.profile-stats strong {
  font-size: 1.2rem;
}

.profile-stats span,
.profile-info-block p {
  color: var(--muted);
}

.profile-info-block {
  border-top: 1px solid var(--line);
  padding-top: 18px;
}

.profile-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.hero-panel {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, rgba(110, 168, 254, 0.13), rgba(143, 122, 247, 0.08));
}

.insight-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.mini-card {
  padding: 18px 16px;
}

.content-columns,
.vendor-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.list-card {
  min-height: 250px;
}

.order-list li,
.review-list li {
  justify-content: space-between;
  padding-bottom: 14px;
  border-bottom: 1px solid var(--line);
}

.order-list li:last-child,
.review-list li:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.status {
  display: inline-block;
  padding: 7px 10px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
}

.status.success {
  background: rgba(73, 211, 154, 0.12);
  color: #8cf0c1;
}

.status.info {
  background: rgba(110, 168, 254, 0.12);
  color: #9bbdff;
}

.status.warning {
  background: rgba(255, 180, 84, 0.12);
  color: #ffc574;
}

.saved-products {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.vendor-hero {
  padding: 18px 20px;
  background: linear-gradient(135deg, rgba(143, 122, 247, 0.12), rgba(14, 23, 40, 0.7));
}

.vendor-identity {
  display: flex;
  align-items: center;
  gap: 18px;
}

.vendor-identity img {
  width: 92px;
  height: 92px;
  border-radius: 24px;
  object-fit: cover;
}

.vendor-actions {
  display: flex;
  gap: 10px;
}

.catalog-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.catalog-item {
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid var(--line);
  border-radius: 16px;
  padding: 12px;
  flex-direction: column;
  align-items: flex-start;
}

.score {
  padding: 6px 10px;
  border-radius: 10px;
  background: rgba(73, 211, 154, 0.14);
  color: #8cf0c1;
}

.app-footer {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 28px 30px;
  color: var(--muted);
}

@media (max-width: 980px) {
  .sidebar {
    display: none;
  }

  .main-panel {
    padding-left: 18px;
    padding-right: 18px;
  }

  .stats-grid,
  .insight-grid,
  .vendor-metrics,
  .content-columns,
  .vendor-grid,
  .content-grid,
  .bottom-grid {
    grid-template-columns: 1fr 1fr;
  }

  .profile-shell,
  .vendor-shell {
    flex-direction: column;
  }

  .profile-sidebar {
    width: 100%;
  }
}

@media (max-width: 640px) {
  .topbar,
  .page-header,
  .hero-panel,
  .vendor-hero,
  .content-columns,
  .vendor-grid,
  .stats-grid,
  .insight-grid,
  .vendor-metrics,
  .content-grid,
  .bottom-grid {
    grid-template-columns: 1fr;
    flex-direction: column;
    align-items: flex-start;
  }

  .page-header,
  .profile-shell,
  .vendor-shell,
  .main-panel {
    padding-left: 16px;
    padding-right: 16px;
  }

  .topbar-actions,
  .page-nav,
  .vendor-actions {
    width: 100%;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .catalog-grid {
    grid-template-columns: 1fr;
  }
}
