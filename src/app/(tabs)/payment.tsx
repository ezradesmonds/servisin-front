import React from "react";
import { View, ScrollView, Image, Text, TouchableOpacity, } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import { SafeAreaView } from "react-native-safe-area-context";
export default (props) => {
	return (
		<SafeAreaView 
			style={{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}>
			<ScrollView  
				style={{
					flex: 1,
					backgroundColor: "#F9F9FF",
					paddingBottom: 127,
				}}>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#FFFFFFCC",
						paddingVertical: 18,
						paddingHorizontal: 16,
						marginBottom: 32,
					}}>
					<View 
						style={{
							flexDirection: "row",
							alignItems: "center",
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/4fm3cz02_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 16,
								height: 16,
								marginRight: 16,
							}}
						/>
						<View 
							style={{
								alignItems: "center",
								paddingVertical: 7,
							}}>
							<Text 
								style={{
									color: "#003F87",
									fontSize: 18,
									fontWeight: "bold",
								}}>
								{"Checkout"}
							</Text>
						</View>
					</View>
					<View 
						style={{
							flex: 1,
							alignItems: "flex-end",
						}}>
						<View 
							style={{
								alignItems: "center",
								paddingVertical: 6,
							}}>
							<Text 
								style={{
									color: "#003F87",
									fontSize: 20,
									fontWeight: "bold",
								}}>
								{"Servisin"}
							</Text>
						</View>
					</View>
				</View>
				<View 
					style={{
						backgroundColor: "#003F870D",
						borderRadius: 9999,
						padding: 26,
						marginBottom: 32,
						marginHorizontal: 25,
					}}>
					<View 
						style={{
							borderColor: "#003F8733",
							borderRadius: 9999,
							borderWidth: 2,
							padding: 16,
						}}>
						<View 
							style={{
								backgroundColor: "#FFFFFF",
								borderRadius: 24,
								paddingVertical: 6,
								paddingHorizontal: 5,
								shadowColor: "#003F8712",
								shadowOpacity: 0.1,
								shadowOffset: {
								    width: 0,
								    height: 32
								},
								shadowRadius: 64,
								elevation: 64,
							}}>
							<View 
								style={{
									height: 244,
									backgroundColor: "#003F871A",
									borderRadius: 9999,
								}}>
							</View>
						</View>
					</View>
				</View>
				<View 
					style={{
						alignSelf: "flex-start",
						alignItems: "center",
						marginBottom: 32,
						marginLeft: 35,
					}}>
					<View 
						style={{
							paddingTop: 6,
							paddingHorizontal: 29,
							marginBottom: 16,
						}}>
						<Text 
							style={{
								color: "#191C21",
								fontSize: 24,
								fontWeight: "bold",
							}}>
							{"Mengarahkan Anda..."}
						</Text>
					</View>
					<View 
						style={{
							paddingVertical: 5,
							paddingHorizontal: 1,
						}}>
						<Text 
							style={{
								color: "#424752",
								fontSize: 16,
								textAlign: "center",
								width: 298,
							}}>
							{"Kamu akan diarahkan ke aplikasi GoPay\nuntuk menyelesaikan pembayaran."}
						</Text>
					</View>
				</View>
				<View 
					style={{
						alignItems: "center",
						marginBottom: 48,
					}}>
					<View 
						style={{
							alignItems: "center",
						}}>
						<View 
							style={{
								backgroundColor: "#E7E8F0",
								borderRadius: 9999,
								paddingRight: 67,
								marginBottom: 12,
							}}>
							<View 
								style={{
									width: 133,
									height: 6,
									backgroundColor: "#003F87",
									borderRadius: 9999,
								}}>
							</View>
						</View>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
							}}>
							<View 
								style={{
									alignItems: "center",
									paddingVertical: 3,
									marginRight: 75,
								}}>
								<Text 
									style={{
										color: "#727784",
										fontSize: 10,
									}}>
									{"Menghubungkan"}
								</Text>
							</View>
							<View 
								style={{
									paddingVertical: 3,
									paddingHorizontal: 1,
								}}>
								<Text 
									style={{
										color: "#003F87",
										fontSize: 10,
										fontWeight: "bold",
									}}>
									{"60%"}
								</Text>
							</View>
						</View>
					</View>
				</View>
				<View 
					style={{
						marginHorizontal: 25,
					}}>
					<TouchableOpacity 
						style={{
							flexDirection: "row",
							justifyContent: "center",
							alignItems: "center",
							borderRadius: 12,
							paddingVertical: 19,
							marginBottom: 16,
						}} onPress={()=>alert('Pressed!')}>
						<LinearGradient 
							start={{x:0, y:0}}
							end={{x:0, y:1}}
							colors={["#003F87", "#0056B3"]}
							style={{
								flexDirection: "row",
								justifyContent: "center",
								alignItems: "center",
								borderRadius: 12,
								paddingVertical: 19,
								marginBottom: 16,
							}}>
							<Text 
								style={{
									color: "#FFFFFF",
									fontSize: 18,
									fontWeight: "bold",
									marginRight: 14,
								}}>
								{"Bayar Sekarang"}
							</Text>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/6cbm5b28_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									borderRadius: 12,
									width: 18,
									height: 18,
								}}
							/>
						</LinearGradient>
					</TouchableOpacity>
					<TouchableOpacity 
						style={{
							flexDirection: "row",
							justifyContent: "center",
							alignItems: "center",
							backgroundColor: "#FFFFFF",
							borderColor: "#003F8733",
							borderRadius: 12,
							borderWidth: 2,
							paddingVertical: 20,
							marginBottom: 16,
						}} onPress={()=>alert('Pressed!')}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/vlvsxtt8_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								borderRadius: 12,
								width: 16,
								height: 16,
								marginRight: 13,
							}}
						/>
						<Text 
							style={{
								color: "#003F87",
								fontSize: 18,
								fontWeight: "bold",
							}}>
							{"Update Status"}
						</Text>
					</TouchableOpacity>
					<View 
						style={{
							alignItems: "center",
							paddingVertical: 3,
						}}>
						<Text 
							style={{
								color: "#727784",
								fontSize: 11,
							}}>
							{"Tidak otomatis terbuka? Klik di sini"}
						</Text>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
