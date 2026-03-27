plugins {
    alias(libs.plugins.kotlin.multiplatform)
}

kotlin {
    macosX64("native") {
        binaries {
            sharedLib {
                baseName = "hw"
            }
        }
    }
}

tasks.withType<Wrapper> {
    distributionType = Wrapper.DistributionType.ALL
}
