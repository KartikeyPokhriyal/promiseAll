
const getString = (word) => {
    return new Promise(function(resolve, reject) {
        if(word === " ") {
          error = new Error(word)
          reject(error)
        }
        else {
            resolve(word)
         }
                       });
}

const promiseAll = function(promises) {
  const resolvedPromises = [];
  var completedPromises = 0;

      return new Promise(function (resolve, reject) {
           promises.forEach(function(promise, index) {
           promise.then(function (value) {
           resolvedPromises[index] = value;
           completedPromises += 1;

        if(completedPromises === promises.length) {
          resolve(resolvedPromises);
        }
      }).catch(function (error) {
        reject(error);
      });
    });
  });
}

const promises = [getString("Kartikey"), getString("Britney"), getString("Legends")]
const promisess = [getString("Kartikey"), getString("Britney"), getString(" ")]

const promisesMade = promiseAll(promises)
const promisesBroken = promiseAll(promisess)


promisesMade.then(function(results) {
 console.log(results);
}).catch(function(error) {
  console.log(error);
});;

promisesBroken.then(function(results) {
 console.log(results);
}).catch(function(error) {
  console.log(`${error} is detected`);
});;
