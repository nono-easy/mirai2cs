/* eslint-disable no-undef */
/* eslint-env node */
const fs = require('fs')
const path = require('path')

const dist = path.join(__dirname, '..', 'dist')
const isPreview = process.env.CF_PAGES_BRANCH && process.env.CF_PAGES_BRANCH !== 'main'

const from = path.join(__dirname, '..', 'public', isPreview ? 'robots.dev.txt' : 'robots.txt')
const to = path.join(dist, 'robots.txt')

fs.mkdirSync(dist, { recursive: true })
fs.copyFileSync(from, to)
console.log('[robots]', isPreview ? 'Disallow (preview)' : 'Allow (prod)')
