## i18next
```
npm install react-i18next i18next --save
npm install --save-dev i18next-parser
```

### How to use
```
import { useTranslation } from 'react-i18next';

const { t, i18n } = useTranslation();

{t('Home page')}
```

### Config

```
i18next-parser:

keySeparator: false,
namespaceSeparator: false,

```

### History build this feature
https://react.i18next.com/getting-started

i18next-parser support auto render datas
https://github.com/i18next/i18next-parser


### More information
learn more: https://github.com/i18next/i18next-browser-languageDetector
.use(LanguageDetector)
for all options read: https://www.i18next.com/overview/configuration-options