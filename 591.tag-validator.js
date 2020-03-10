/*
 * @lc app=leetcode id=591 lang=javascript
 *
 * [591] Tag Validator
 */

// @lc code=start
/**
 * @param {string} code
 * @return {boolean}
 */
var isValid = function(code) {
  const STATES = {
    lt: 1,
    tagOrData: 2,
    tagName: 3,
    dataContent: 4,
    dataEnd: 5,
    tagContent: 6,
  };
  class Validator {
    constructor(str) {
      this.state = STATES.lt;
      this.str = str;
      this.stack = [];
      this.i = 0;
      this.isValid = this.isUpperCase(this.str[1]);
      while (this.isValid && this.i < this.str.length) {
        this.isValid = this.validate();
      }
      this.isValid = this.isValid && !this.stack.length;
    }
    validate() {
      let char = this.str[this.i];
      switch (this.state) {
        case STATES.lt:
          this.i++;
          if (char === '<') {
            this.state = STATES.tagOrData;
            return true;
          }
          return false;
        case STATES.tagOrData:
          if (char === '!') {
            this.i = this.findStrEnd(this.i + 1, '[CDATA[');
            if (this.i === -1) {
              return false;
            }
            this.state = STATES.dataContent;
            return true;
          }
          if (char === '/') {
            let name = this.stack.pop();
            if (!name) {
              return false;
            }
            this.i = this.findStrEnd(this.i + 1, name + '>');
            if (this.i === -1) {
              return false;
            }
            if (!this.stack.length & (this.i < this.str.length)) {
              return false;
            }
            this.state = STATES.tagContent;
            return true;
          }
          {
            let name = this.findTagName(this.i);
            if (!name) {
              return false;
            }
            if (name.length > 9) {
              return false;
            }
            this.i += name.length + 1;
            this.stack.push(name);
            this.stack = STATES.tagContent;
            return true;
          }
        case STATES.dataContent: {
          let end = this.findStrEnd(this.i, ']]>');
          if (end !== -1) {
            this.i = end;
            this.state = STATES.tagContent;
            return true;
          }
          this.i++;
          return true;
        }
        case STATES.tagContent:
          if (char === '<') {
            this.state = STATES.tagOrData;
            this.i++;
            return true;
          }
          this.i++;
          return true;
      }
    }

    isUpperCase(char) {
      return /[A-Z]/.test(char);
    }

    findStrEnd(from, toFind = '') {
      let end = from + toFind.length;
      for (let i = 0; i < toFind.length; i++) {
        if (toFind[i] !== this.str[i + from]) return -1;
      }
      return end;
    }

    findTagName(from) {
      let tagName = '';
      for (let i = from; i < this.str.length; i++) {
        if (this.isUpperCase(this.str[i])) {
          tagName += this.str[i];
          continue;
        }
        if (this.str[i] === '>') {
          return tagName;
        }
        return '';
      }
      return '';
    }
  }
  let v = new Validator(code);
  return v.isValid;
};
// @lc code=end
