# Sapiens in Time

เกมชีวิตพิกเซล 2D บนเบราว์เซอร์ เล่นบนมือถือเป็นหลัก: สุ่มเกิดเป็นคนธรรมดาคนหนึ่งในประวัติศาสตร์มนุษย์ ใช้ชีวิตทีละปี ตัดสินใจ แล้วดูว่าชีวิตนั้นทิ้งอะไรไว้

A mobile-first 2D pixel life-sim in the browser. You are born, at random, as one ordinary person somewhere in human history, live year by year, make choices, and see what your life leaves behind.

**เล่น / Play:** เปิด `index.html` (ไฟล์เดียว ไม่ต้องติดตั้งอะไร)

## บท / Chapters
| # | บท | ช่วงเวลา |
|---|---|---|
| 01 | มนุษย์หลายสายพันธุ์ / Many kinds of humans | 120,000–50,000 ปีก่อน |
| 02 | นักล่าแมมมอธ / Mammoth hunters | 45,000–12,000 ปีก่อน |
| 03 | การปฏิวัติเกษตร / The farming revolution | 12,000–7,000 ปีก่อน |
| 04 | เมโสโปเตเมีย: สุเมเรียนถึงบาบิโลน / Mesopotamia | 5,300–2,560 ปีก่อน |
| 05 | อียิปต์โบราณ: ชีวิตริมแม่น้ำไนล์ / Ancient Egypt | 5,100–3,095 ปีก่อน |
| 06 | นักเดินเรือแปซิฟิก / Pacific voyagers | 3,500–700 ปีก่อน |
| ✦ | การเดินทางข้ามรุ่น: ออกจากแอฟริกา / Out of Africa (lineage) | 72,000–14,000 ปีก่อน |

ภาษา / Languages: ไทย · English · 中文 · 日本語 · 한국어 · Deutsch · Español

## เทคนิค / Tech
- ไฟล์ HTML เดียว เอนจินเขียนเอง ภาพพิกเซลวาดด้วย canvas เสียงสังเคราะห์ด้วย Web Audio (ไม่มีไฟล์เสียง)
- Single self-contained HTML file; own engine; canvas pixel art; all sound synthesized with Web Audio.
- เนื้อหาอิงหลักฐานทางประวัติศาสตร์และโบราณคดี แยก “หลักฐาน” ออกจาก “การจำลอง” และติดป้าย ✦ ให้ตำนาน

## พัฒนาต่อ / Development
ดู [`dev/NOTES.md`](dev/NOTES.md) และเอกสารออกแบบ [`dev/DESIGN.md`](dev/DESIGN.md)

```bash
cd dev && ./build.sh     # dev/game.src.html + dev/i18n/*.tsv  ->  index.html
```

© Anusorn Sintusaichol. All rights reserved.
