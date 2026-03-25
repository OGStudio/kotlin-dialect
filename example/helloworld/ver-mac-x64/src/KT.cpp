#include "KT.h"

// MOVE to EffectRegistry
void processOneliners() {
    printf("ИГР KT.processO\n");
}

template<>
void mainSet(
    const std::string &key,
    bool value
) {
    KT.KDController.set(KT.mainCtrl(), key.c_str(), KT.boolToAny(value));
}

/*
template<>
void mainSet(
    const std::string &key,
    const char *value
) {
    auto ctrl = KT.mainCtrl();
    KT.KDController.set(ctrl, key.c_str(), KT.strAsAny(value));
}

*/

EffectRegistry::EffectRegistry() { }

void EffectRegistry::registerOneliners(
    libhw_kref_org_opengamestudio_KDController ctrl,
    const std::vector<std::any> &items
) {
    // Make sure to do it only once
    KT.registerCallbackC(
        ctrl,
        (void *)&processOneliners
    );
    _items = items;
}

MainContext::MainContext(libhw_kref_org_opengamestudio_MainContext ctx): ctx(ctx) { }

bool MainContext::didLaunch() const {
    return KT.MainContext.get_didLaunch(ctx);
}

bool MainContext::isVisible() const {
    return KT.MainContext.get_isVisible(ctx);
}
