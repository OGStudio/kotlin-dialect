#ifndef HW_KT_H
#define HW_KT_H

#include <any>
#include <string>

#include "libhw_api.h"
#define KT libhw_symbols()->kotlin.root.org.opengamestudio

template<typename T> void mainSet(const std::string &key, T value);

class EffectRegistry {
    public:
        EffectRegistry();

        void registerOneliners(
            libhw_kref_org_opengamestudio_KDController ctrl,
            const std::vector<std::any> &items
        );

    private:
        std::vector<std::any> _items;
};

class MainContext {
    public:
        MainContext(libhw_kref_org_opengamestudio_MainContext ctx);

        bool didLaunch() const;
        bool isVisible() const;

    private:
        libhw_kref_org_opengamestudio_MainContext ctx;
};

#endif // HW_KT_H
