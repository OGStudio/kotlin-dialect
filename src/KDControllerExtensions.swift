extension KDController {
    // Make registerFieldCallback() call similar to Android
    func registerFieldCallback(_ fieldName: String, _ cb: @escaping (KDContext) -> Void) {
        registerFieldCallback(fieldName: fieldName) { cc in
            cb(cc)
        }
    }

    // Make set() call similar to Android
    func set(_ k: String, _ v: Any) {
        set(fieldName: k, value: v)
    }
}
