/*************************************************************************
                          Written by Ali Muhammed
                            uniapi@outlook.com
                              October 4, 2018
*************************************************************************/

module.exports = function longestConsecutiveLength(seq) {
	const len = seq.length;
	let long = 1;
	let cnt = 1;
	let diff;
	if (!len)
		return 0;
	seq.sort((a, b) => a - b);
	for (let i=1; i < len; i++) {
		diff = seq[i] - seq[i-1];
		if (diff === 1)
			cnt++;
		else if (diff > 0) {
			if (long < cnt) {
				long = cnt;
				if (len - i < long)
					break;
			}
			cnt = 1;
		}
	}
	return cnt === len ? cnt : long < cnt ? cnt : long;
}
