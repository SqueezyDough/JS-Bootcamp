// the locked box

const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true;  },
    _content: [],
    get content() {
      if (this.locked) throw new Error("Locked!");
      return this._content;
    }
  };

  // unlocks the box, then adds a gold piece and closed it
  function withBoxUnlocked(body) {
    try {
        box.unlock();

        // fire an exeption
        body();
    }
    // catched it :)
    catch(e) {
        console.log(box.content, e);
    }
    finally {
        box.lock();
    }
  }

  withBoxUnlocked(function() {
    box.content.push("gold piece");
  });

  try {
    withBoxUnlocked(function() {
      throw new Error("Pirates on the horizon! Abort!");
    });
  } catch (e) {
    console.log("Error raised:", e);
  }
  console.log(box.locked);
  // → true