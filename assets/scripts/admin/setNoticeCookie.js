/**
 * Set Notice Cookie on notice panel dismissal
 */
export default function setNoticeCookie() {
  const closeNoticeButton = document.getElementById('blocksplus_notice');

  if (closeNoticeButton) {
    closeNoticeButton.addEventListener('click', function () {
        console.log(closeNoticeButton);
        document.cookie = 'blocksplus_notice=closed; Path=/;';
    });
  }
}