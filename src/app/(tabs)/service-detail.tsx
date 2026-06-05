import React from "react";
import { View, ScrollView, Image, Text, TouchableOpacity, } from "react-native";
import {LinearGradient} from 'expo-linear-gradient';
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from 'expo-router';

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
					backgroundColor: "#FFFFFF",
				}}>
				<View 
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						backgroundColor: "#F8FAFCCC",
						paddingVertical: 16,
						paddingHorizontal: 24,
						marginBottom: 24,
						shadowColor: "#0000000D",
						shadowOpacity: 0.1,
						shadowOffset: {
						    width: 0,
						    height: 1
						},
						shadowRadius: 2,
						elevation: 2,
					}}>
					<View 
						style={{
							flexDirection: "row",
							alignItems: "center",
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/wcoq62k5_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 40,
								height: 40,
								marginRight: 16,
							}}
						/>
						<View 
							style={{
								alignItems: "center",
								paddingVertical: 6,
							}}>
							<Text 
								style={{
									color: "#1E3A8A",
									fontSize: 20,
									fontWeight: "bold",
								}}>
								{"Servisin"}
							</Text>
						</View>
					</View>
					<View 
						style={{
							flexDirection: "row",
							alignItems: "center",
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/h6zjjh1o_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 40,
								height: 40,
								marginRight: 12,
							}}
						/>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/5jq2cu9c_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 40,
								height: 40,
							}}
						/>
					</View>
				</View>
				<LinearGradient 
					start={{x:0, y:0}}
					end={{x:0, y:1}}
					colors={["#00000099", "#00000000", "#00000000"]}
					style={{
						paddingTop: 104,
						paddingBottom: 31,
						paddingHorizontal: 32,
						marginBottom: 24,
						marginHorizontal: 16,
					}}>
					<View 
						style={{
							alignSelf: "flex-start",
							flexDirection: "row",
							alignItems: "center",
							backgroundColor: "#7EFBA4",
							borderRadius: 9999,
							paddingVertical: 5,
							paddingHorizontal: 12,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/umhxqeku_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								borderRadius: 9999,
								width: 12,
								height: 12,
								marginRight: 9,
							}}
						/>
						<Text 
							style={{
								color: "#00210C",
								fontSize: 12,
								fontWeight: "bold",
							}}>
							{"VERIFIED EXPERT"}
						</Text>
					</View>
					<View >
						<View 
							style={{
								paddingTop: 12,
								paddingRight: 45,
							}}>
							<Text 
								style={{
									color: "#FFFFFF",
									fontSize: 36,
									fontWeight: "bold",
								}}>
								{"Marcus Thorne"}
							</Text>
						</View>
						<View 
							style={{
								paddingRight: 13,
							}}>
							<Text 
								style={{
									color: "#FFFFFF",
									fontSize: 18,
								}}>
								{"Master Electrician & Smart Home\nIntegration"}
							</Text>
						</View>
					</View>
				</LinearGradient>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 24,
						marginHorizontal: 16,
					}}>
					<View 
						style={{
							flex: 1,
							alignItems: "center",
							backgroundColor: "#F2F3FC",
							borderRadius: 24,
							paddingVertical: 16,
							marginRight: 12,
						}}>
						<View 
							style={{
								paddingVertical: 7,
								paddingHorizontal: 2,
							}}>
							<Text 
								style={{
									color: "#865300",
									fontSize: 24,
									fontWeight: "bold",
								}}>
								{"1.2k+"}
							</Text>
						</View>
						<View 
							style={{
								alignSelf: "stretch",
								alignItems: "center",
								paddingTop: 7,
								paddingBottom: 3,
								marginHorizontal: 22,
							}}>
							<Text 
								style={{
									color: "#424752",
									fontSize: 10,
								}}>
								{"JOBS DONE"}
							</Text>
						</View>
					</View>
					<View 
						style={{
							flex: 1,
							alignItems: "center",
							backgroundColor: "#F2F3FC",
							borderRadius: 24,
							paddingVertical: 16,
							marginRight: 12,
						}}>
						<View 
							style={{
								flexDirection: "row",
								alignItems: "center",
							}}>
							<View 
								style={{
									paddingVertical: 7,
									paddingHorizontal: 1,
									marginRight: 4,
								}}>
								<Text 
									style={{
										color: "#865300",
										fontSize: 24,
										fontWeight: "bold",
									}}>
									{"4.9"}
								</Text>
							</View>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/32jscjz7_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 11,
									height: 11,
								}}
							/>
						</View>
						<View 
							style={{
								alignItems: "center",
								paddingTop: 4,
							}}>
							<View 
								style={{
									paddingVertical: 3,
									paddingHorizontal: 2,
								}}>
								<Text 
									style={{
										color: "#424752",
										fontSize: 10,
									}}>
									{"RATING"}
								</Text>
							</View>
						</View>
					</View>
					<View 
						style={{
							flex: 1,
							alignItems: "center",
							backgroundColor: "#F2F3FC",
							borderRadius: 24,
							paddingVertical: 16,
						}}>
						<View 
							style={{
								paddingVertical: 4,
								paddingHorizontal: 1,
							}}>
							<Text 
								style={{
									color: "#865300",
									fontSize: 24,
									fontWeight: "bold",
								}}>
								{"12y"}
							</Text>
						</View>
						<View 
							style={{
								alignSelf: "stretch",
								alignItems: "center",
								paddingTop: 7,
								paddingBottom: 3,
								marginHorizontal: 20,
							}}>
							<Text 
								style={{
									color: "#424752",
									fontSize: 10,
								}}>
								{"EXPERIENCE"}
							</Text>
						</View>
					</View>
				</View>
				<View 
					style={{
						paddingTop: 16,
						marginBottom: 40,
						marginHorizontal: 16,
					}}>
					<View 
						style={{
							marginBottom: 15,
						}}>
						<Text 
							style={{
								color: "#003F87",
								fontSize: 20,
								fontWeight: "bold",
							}}>
							{"About Marcus"}
						</Text>
					</View>
					<View 
						style={{
							backgroundColor: "#FFFFFF",
							borderRadius: 32,
							padding: 24,
							shadowColor: "#0000000D",
							shadowOpacity: 0.1,
							shadowOffset: {
							    width: 0,
							    height: 1
							},
							shadowRadius: 2,
							elevation: 2,
						}}>
						<View 
							style={{
								marginBottom: 23,
							}}>
							<Text 
								style={{
									color: "#424752",
									fontSize: 16,
								}}>
								{"With over a decade of hands-on\nexperience, I specialize in complex\nresidential electrical systems and\ncutting-edge smart home automation.\nMy approach combines technical\nprecision with a commitment to safety\nand clean aesthetics. Whether it's a\nsimple panel upgrade or a full home\ntheater integration, I ensure every wire is\nperfect."}
							</Text>
						</View>
						<View >
							<View 
								style={{
									alignSelf: "flex-start",
									flexDirection: "row",
									alignItems: "center",
									marginBottom: 8,
								}}>
								<TouchableOpacity 
									style={{
										backgroundColor: "#EDEDF6",
										borderRadius: 9999,
										paddingVertical: 11,
										paddingHorizontal: 17,
										marginRight: 8,
									}} onPress={()=>alert('Pressed!')}>
									<Text 
										style={{
											color: "#003F87",
											fontSize: 14,
										}}>
										{"EV Charging"}
									</Text>
								</TouchableOpacity>
								<TouchableOpacity 
									style={{
										backgroundColor: "#EDEDF6",
										borderRadius: 9999,
										paddingVertical: 11,
										paddingHorizontal: 16,
									}} onPress={()=>alert('Pressed!')}>
									<Text 
										style={{
											color: "#003F87",
											fontSize: 14,
										}}>
										{"Smart Lighting"}
									</Text>
								</TouchableOpacity>
							</View>
							<TouchableOpacity 
								style={{
									alignSelf: "flex-start",
									backgroundColor: "#EDEDF6",
									borderRadius: 9999,
									paddingVertical: 11,
									paddingHorizontal: 17,
								}} onPress={()=>alert('Pressed!')}>
								<Text 
									style={{
										color: "#003F87",
										fontSize: 14,
									}}>
									{"Fault Diagnostics"}
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
				<View 
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
						paddingHorizontal: 8,
						marginBottom: 16,
						marginHorizontal: 16,
					}}>
					<View 
						style={{
							paddingVertical: 6,
							paddingHorizontal: 1,
						}}>
						<Text 
							style={{
								color: "#003F87",
								fontSize: 20,
								fontWeight: "bold",
							}}>
							{"Portfolio"}
						</Text>
					</View>
					<View 
						style={{
							alignItems: "center",
							paddingVertical: 7,
						}}>
						<Text 
							style={{
								color: "#003F87",
								fontSize: 14,
								fontWeight: "bold",
							}}>
							{"See All"}
						</Text>
					</View>
				</View>
				<ScrollView 
					horizontal
					showsHorizontalScrollIndicator={false} 
					style={{
						flexDirection: "row",
						marginBottom: 39,
					}}>
					<View 
						style={{
							alignItems: "center",
							marginLeft: 16,
							marginRight: -374,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/1r4yyo52_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 256,
								height: 144,
								marginBottom: 7,
							}}
						/>
						<View 
							style={{
								paddingLeft: 4,
								paddingRight: 78,
							}}>
							<Text 
								style={{
									color: "#424752",
									fontSize: 12,
								}}>
								{"High-efficiency Panel Upgrade"}
							</Text>
						</View>
					</View>
					<View 
						style={{
							alignItems: "center",
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/1r4yyo52_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 256,
								height: 144,
								marginBottom: 7,
							}}
						/>
						<View 
							style={{
								paddingLeft: 4,
								paddingRight: 78,
							}}>
							<Text 
								style={{
									color: "#424752",
									fontSize: 12,
								}}>
								{"High-efficiency Panel Upgrade"}
							</Text>
						</View>
					</View>
				</ScrollView>
				<View 
					style={{
						paddingTop: 16,
						marginBottom: 13,
						marginHorizontal: 16,
					}}>
					<View 
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							alignItems: "center",
							paddingHorizontal: 8,
							marginBottom: 24,
						}}>
						<View 
							style={{
								paddingVertical: 6,
								paddingHorizontal: 1,
							}}>
							<Text 
								style={{
									color: "#003F87",
									fontSize: 20,
									fontWeight: "bold",
								}}>
								{"Recent Reviews"}
							</Text>
						</View>
						<View 
							style={{
								alignItems: "center",
								paddingVertical: 6,
							}}>
							<Text 
								style={{
									color: "#003F87",
									fontSize: 14,
									fontWeight: "bold",
								}}>
								{"View All (124)"}
							</Text>
						</View>
					</View>
					<View 
						style={{
							backgroundColor: "#F2F3FC",
							borderRadius: 32,
							paddingVertical: 23,
							paddingHorizontal: 24,
							marginBottom: 24,
						}}>
						<View 
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								marginBottom: 11,
							}}>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/vir79a7m_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 40,
										height: 40,
										marginRight: 12,
									}}
								/>
								<View 
									style={{
										alignItems: "center",
									}}>
									<View 
										style={{
											alignItems: "center",
											paddingVertical: 4,
										}}>
										<Text 
											style={{
												color: "#191C21",
												fontSize: 14,
												fontWeight: "bold",
											}}>
											{"Sarah Jenkins"}
										</Text>
									</View>
									<View 
										style={{
											paddingVertical: 2,
											paddingRight: 33,
										}}>
										<Text 
											style={{
												color: "#424752",
												fontSize: 12,
											}}>
											{"2 days ago"}
										</Text>
									</View>
								</View>
							</View>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/q5ml60bm_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 83,
									height: 14,
								}}
							/>
						</View>
						<View >
							<Text 
								style={{
									color: "#424752",
									fontSize: 14,
								}}>
								{"\"Marcus was incredibly professional. He\nidentified the wiring issue in minutes and fixed\nit perfectly. Highly recommend for any\nelectrical work!\""}
							</Text>
						</View>
					</View>
					<View 
						style={{
							backgroundColor: "#F2F3FC",
							borderRadius: 32,
							paddingVertical: 23,
							paddingHorizontal: 24,
						}}>
						<View 
							style={{
								flexDirection: "row",
								justifyContent: "space-between",
								marginBottom: 11,
							}}>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/qrfxfe9k_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 40,
										height: 40,
										marginRight: 12,
									}}
								/>
								<View 
									style={{
										alignItems: "center",
									}}>
									<View 
										style={{
											alignItems: "center",
											paddingVertical: 4,
										}}>
										<Text 
											style={{
												color: "#191C21",
												fontSize: 14,
												fontWeight: "bold",
											}}>
											{"David Chen"}
										</Text>
									</View>
									<View 
										style={{
											paddingVertical: 2,
											paddingRight: 14,
										}}>
										<Text 
											style={{
												color: "#424752",
												fontSize: 12,
											}}>
											{"1 week ago"}
										</Text>
									</View>
								</View>
							</View>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/JwKgeNiNXT/mbgu3b0p_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 83,
									height: 14,
								}}
							/>
						</View>
						<View >
							<Text 
								style={{
									color: "#424752",
									fontSize: 14,
								}}>
								{"\"Great attention to detail on our smart lighting\nsetup. A true expert who knows his craft well.\""}
							</Text>
						</View>
					</View>
				</View>
				<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						backgroundColor: "#F8FAFCE3",
						borderRadius: 40,
						paddingVertical: 20,
						paddingHorizontal: 32,
						marginVertical: 23,
						marginHorizontal: 24,
						shadowColor: "#00000012",
						shadowOpacity: 0.1,
						shadowOffset: {
						    width: 0,
						    height: -8
						},
						shadowRadius: 40,
						elevation: 40,
					}}>
					<View 
						style={{
							alignItems: "center",
							marginRight: 17,
						}}>
						<View 
							style={{
								alignItems: "center",
								paddingVertical: 3,
							}}>
							<Text 
								style={{
									color: "#424752",
									fontSize: 10,
									fontWeight: "bold",
								}}>
								{"STANDARD RATE"}
							</Text>
						</View>
						<View 
							style={{
								flexDirection: "row",
							}}>
							<Text 
								style={{
									color: "#865300",
									fontSize: 24,
									fontWeight: "bold",
									marginVertical: 5,
									marginRight: 5,
								}}>
								{"$85"}
							</Text>
							<Text 
								style={{
									color: "#424752",
									fontSize: 12,
									marginTop: 16,
									marginRight: 13,
								}}>
								{"/ hour"}
							</Text>
						</View>
					</View>
					<TouchableOpacity 
						style={{
							flex: 1,
							alignItems: "center",
							backgroundColor: "#FFFFFF00",
							borderRadius: 16,
							paddingVertical: 23,
							shadowColor: "#0000001A",
							shadowOpacity: 0.1,
							shadowOffset: {
							    width: 0,
							    height: 4
							},
							shadowRadius: 6,
							elevation: 6,
						}} onPress={() => router.push('/confirm-booking')}>
						<Text 
							style={{
								color: "#FFFFFF",
								fontSize: 18,
								fontWeight: "bold",
							}}>
							{"Book Now"}
						</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
