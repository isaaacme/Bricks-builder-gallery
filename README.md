# Brutalist Bricks Gallery

גלריה מונוכרומטית לאתרים שנבנו עם Bricks Builder בישראל, נבנתה ב-Astro עם עיצוב DaisyUI.

## מבנה
- `src/pages` – עמודי גלריה, אודות, בלוג והגשת אתר.
- `src/pages/api` – API מינימלי לשמירת הגשות בקובץ JSON והחזרת כל האתרים.
- `src/data` – מקורות הנתונים (אתרים, הגשות, מאמרים).
- `src/layouts/BaseLayout.astro` – פריסת בסיס עם תפריט המבורגר וקישורי ניווט.

## הרצה
הפרויקט מוגדר ל-output מסוג server עבור עבודה עם ה-API. לאחר התקנת התלויות הריצו:

```bash
npm install
npm run dev
```

## הגשות חדשות
טופס ההגשה שולח בקשת POST ל-`/api/submit` ומוסיף את האתר ל-`src/data/submissions.json`. עמוד הגלריה מושך את הנתונים בכל טעינה.
