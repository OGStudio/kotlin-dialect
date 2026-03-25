#include <any>
#include <cstdio>
#include <vector>
#include "main.h"

/*
void processOneliners() {
    auto bctx = KT.budgetControllerContext();
    auto ctx = KT.budgetContextToCLD(bctx);
    auto key = KT.CLDContext.get_recentField(ctx);

    int halfCount = oneliners.size() / 2;
    for (int i = 0; i < halfCount; ++i) {
        auto field = std::any_cast<const char *>(oneliners[i * 2]);
        if (strcmp(field, key) == 0) {
            printf("ИГР processO field: '%s'\n", field);
            auto callback = std::any_cast<std::function<void(BudgetContext)>>(oneliners[i * 2 + 1]);
            auto c = BudgetContext(bctx);
            callback(c);
        }
    }
}
*/

MainComponent::MainComponent(/*const VM &vm*/) {
    _er = new EffectRegistry();

    std::vector<std::any> oneliners = {
        "didLaunch", std::make_any<std::function<void(MainContext)>>([&](MainContext c) { printf("ИГР lambda didL: '%d'\n", c.didLaunch()); }),
        "isVisible", std::make_any<std::function<void(MainContext)>>([&](MainContext c) { printf("ИГР lambda isVisible: '%d'\n", c.isVisible()); }),
    };
    _er->registerOneliners(KT.mainCtrl(), oneliners);
}

void MainComponent::launch() {
    mainSet("didLaunch", true);
}
