if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "/Users/nextek/.gradle/caches/8.8/transforms/691784f5561ac84294df3d3e8ffd851d/transformed/jetified-hermes-android-0.75.2-debug/prefab/modules/libhermes/libs/android.armeabi-v7a/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/nextek/.gradle/caches/8.8/transforms/691784f5561ac84294df3d3e8ffd851d/transformed/jetified-hermes-android-0.75.2-debug/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

