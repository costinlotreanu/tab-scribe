string =
  'https://mail.google.com/mail/u/0/#inbox/KtbxLvhGJnVpRHZsFtPdjKcfNtpnsztVKL';

string2 = 'https://www.youtube.com/watch?v=UMnic09YqKQ';
string3 = 'http://www.youtube.com/watch?v=UMnic09YqKQ';

const anchorName = renameItemURL(string);

function renameItemURL(string) {
  if (string.startsWith('https://', 's')) {
    console.log(string.replace('https//', 'bau'));
    console.log(
      string.replace(
        'https://mail.google.com/mail/u/0/#inbox/KtbxLvhGJnVpRHZsFtPdjKcfNtpnsztVKL',
        'test'
      )
    );
    return string.replace('https//', ' ');
  }
  if (string.startsWith('http://')) {
    return true;
  }
}

anchorName;
