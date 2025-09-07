export const escapeHtml = (str) => {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
};

const PATTERN = {
    "h1": /^#(.+)/,
    "h2": /^##(.+)/,
    "h3": /^###(.+)/,
    "h4": /^####(.+)/,
    "h5": /^#####(.+)/,
    "h6": /^######(.+)/,
    "ul": /^-(.+)/,
    "ol": /^[1-9][0-9]*\.\s(.+)$/,
    "blockquote": /^>(.+)/,
    "link": /\[(.*?)\]\((.*?)\)/g,
    "code_inline": /`(.*)`/g,
    "code_block": /```([\s\S]*?)```/,
}

export const translateMarkdown = (str) => {
    const tags = str
        .replace(PATTERN["code_block"], (match, p1) => `<pre class='codeBlock markdown'>${escapeHtml(p1)}</pre>`)
        .split('\n');
    const translatedTags = [];
    let ulFlag = false, olNum = 0;

    
    tags.forEach((tag) => {
        tag = tag
        .replace(PATTERN["code_inline"], (match, p1) => `<span class='markdown'>${escapeHtml(p1)}</span>`)
        .replace(PATTERN["link"], '<a href=$2>$1</a>');

        // end ul
        if (ulFlag && !PATTERN["ul"].test(tag)) {
            translatedTags.push('</ul>');
            ulFlag = false;
        }

        // end ol
        if (olNum !== 0 && (olNum !== +tag[0] || !PATTERN["ol"].test(tag))) {
            translatedTags.push('</ol>');
            olNum = 0;
        }

        if (tag === '') {
            translatedTags.push('<br />');
        }
        else if (PATTERN["h6"].test(tag)) {
            translatedTags.push(tag.replace(PATTERN["h6"], '<h6>$1</h6>'));
        }
        else if (PATTERN["h5"].test(tag)) {
            translatedTags.push(tag.replace(PATTERN["h5"], '<h5>$1</h5>'));
        }
        else if (PATTERN["h4"].test(tag)) {
            translatedTags.push(tag.replace(PATTERN["h4"], '<h4>$1</h4>'));
        }
        else if (PATTERN["h3"].test(tag)) {
            translatedTags.push(tag.replace(PATTERN["h3"], '<h3>$1</h3>'));
        }
        else if (PATTERN["h2"].test(tag)) {
            translatedTags.push(tag.replace(PATTERN["h2"], '<h2>$1</h2>'));
        }
        else if (PATTERN["h1"].test(tag)) {
            translatedTags.push(tag.replace(PATTERN["h1"], '<h1>$1</h1>'));
        }
        else if (PATTERN["blockquote"].test(tag)) {
            translatedTags.push(tag.replace(PATTERN["blockquote"], "<div class='blockquote'>$1</div>"));
        }
        else if (PATTERN["ul"].test(tag)) {
            if (!ulFlag) {
                translatedTags.push('<ul>');
                ulFlag = true;
            }
            translatedTags.push(tag.replace(PATTERN["ul"], '<li>$1</li>'));
        }
        else if (PATTERN["ol"].test(tag)) {
            if (olNum === 0) {
                translatedTags.push(`<ol start=${+tag[0]}>`);
                olNum = +tag[0] + 1;
            }
            translatedTags.push(tag.replace(PATTERN["ol"], '<li>$1</li>'));
        }
        else {
            translatedTags.push(`<p>${tag}</p>`);
        }
    })
    return translatedTags.join('');
}

export const generateUniqueId = () => {
  return `id-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
};

export const formatDate = () => {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, '0'); // Get day and pad with leading zero
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Get month (0-11) and pad with leading zero
  const year = date.getFullYear(); // Get full year

  return `${day}-${month}-${year}`; // Format as 'DD-MM-YYYY'
};