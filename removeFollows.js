var i=0;function nextUnfollow(){return document.querySelector('[data-testid*="unfollow"]')}function nextUnfollowConfirm(){return document.querySelector('[data-testid="confirmationSheetConfirm"]')}function wait(o){return new Promise((n=>setTimeout(n,o)))}async function removeAll(){let o=0,n=nextUnfollow();for(;n;){n.focus(),n.click();let e=nextUnfollowConfirm();e.focus(),e.click(),console.log(`Unfollowed ${++o} accounts`),await wait(o%50==0?3e4:2e3),n=nextUnfollow()}check()}function check(){null==document.querySelector('[data-testid*="unfollow"]')?console.log("Out of accounts to unfollow, unfollow count =",count):(console.log("Discovered more accounts to unfollow, continuing..."),removeAll())}removeAll();