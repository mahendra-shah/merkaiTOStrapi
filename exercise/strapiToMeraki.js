const strapiToMerakiConverter = (blockData) => {

  const translatedData = []
  for (let comp of blockData) {

    switch (comp.type) {
      case 'header':
        translatedData.push({
          component: 'header',
          variant: comp.data.level,
          value: comp.data.text
        });
        break;

      case 'paragraph':
        translatedData.push({
          component: 'text',
          value: comp.data.text
        });
        break;

      case 'image':
        translatedData.push({
          component: 'image',
          value: comp.data.file.url,
          alt: comp.data.file.alt
        });
        break;

      case 'embed':
        translatedData.push({
          component: 'youtube',
          value: comp.data.source.split('youtu.be/')[1]
        });
        break;

      case 'list':
        const listItems = comp.data.items;
        const decoration = comp.data.style === 'ordered'
          ? { type: 'number' }
          : { type: 'bullet' };
        const items = listItems.map((value, index) => ({
          component: 'text',
          value,
          decoration: {
            ...decoration,
            value: comp.data.style === 'ordered' ? index + 1 : undefined
          }
        }));
        translatedData.push(...items);
        break;

      case 'code':
        translatedData.push({
          component: 'code',
          type: 'python',
          title: '',
          value: comp.data.code
        });
        break;

      case 'table':
        const { content } = comp.data;
        const headers = content[0];
        const rows = content.slice(1);
        const value = headers.map((header, index) => ({
          header: `<b>${header}</b>`,
          items: rows.map(row => row[index])
        }));
        translatedData.push({
          component: 'table',
          value
        });
        break;

      default:
      // ignore unknown types
    }
  }
  // console.log(translatedData);
  return translatedData;

}

module.exports = strapiToMerakiConverter;
