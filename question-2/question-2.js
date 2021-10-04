const resolvedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = {'message': 'resolve promise!'}
            resolve(success)
        }, 500)
    })
}

const rejectedPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = {'error': 'reject promise!'}
            reject(error)
        }, 500)
    })
}

resolvedPromise().then((resloved) => console.log(resloved))
rejectedPromise().catch((rejected) => console.log(rejected))


